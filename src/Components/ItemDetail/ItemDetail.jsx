import {useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"



export const ItemDetail = ({producto}) => {
 const [isCant, setIsCant] = useState(false)
 const {addToCart, cartList} = useCartContext()

  const onAdd = (cantidad) =>{
    addToCart({...producto, cantidad})
    setIsCant(true)
  }

  

  return (
    <>
    <div className="row">
      <div className="col">
        <img src={producto.foto} className="w-50" alt="imagen" />
        <h3>Nombre: {producto.name} </h3>
        <h3>Precio: {producto.price} </h3>
        <h3>Categoria: {producto.categoria} </h3>
        <h3>Stock: {producto.stock} </h3>
      </div>
      <div className="col">

      </div>

    </div>
    {
      ! isCant ? 
        <ItemCount onAdd={onAdd}/>
      :
      <>
      <Link to={"/cart"} className="btn btn-outline-danger">Terminar compra</Link>
      <Link to={"/"} className="btn btn-outline-success">Seguir comprando</Link>
      
      </>
        
    }
    
    
    
    </>
  )
}
