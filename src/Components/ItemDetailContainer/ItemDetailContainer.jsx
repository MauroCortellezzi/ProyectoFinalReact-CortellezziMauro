import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"

import Loading from "../Loading/Loading"
import {getDoc, doc, getFirestore} from "firebase/firestore"


export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [isLoading, setIsLoading] = useState(true)

    
const {pid} = useParams()

  useEffect(()=>{
      const dbFirestore = getFirestore()
      const queryDoc = doc(dbFirestore, "productos", pid)

      getDoc(queryDoc)
      .then(resp=>setProducto ( { id: resp.id, ...resp.data() } ) )
      .catch(err=> console.log(err))
      .finally(()=> setIsLoading(false))
  },[])

    
console.log(pid)

  return (
    <div>
      <center>id del producto {pid}</center>
      {isLoading 
      ? 
      <Loading/>   
      :
        <ItemDetail producto={producto}/>
      }
    </div>
  )
}
