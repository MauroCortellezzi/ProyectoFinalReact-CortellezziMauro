import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"



const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { categoria } = useParams()

  console.log(categoria)

  useEffect(() => {

    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, "productos")
    const queryCollectionFiltered = !categoria ? queryCollection : query(
      queryCollection,
      where("categoria", "==", categoria)
    )



    getDocs(queryCollectionFiltered)
      .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))



  }, [categoria])







  

  return (
    <>

      {isLoading ?
        <Loading />
             :
        <ItemList productos={productos} />
      }
    </>
  )
}

export default ItemListContainer