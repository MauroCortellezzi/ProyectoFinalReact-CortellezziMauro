import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { writeBatch, updateDoc, doc, addDoc, collection, getFirestore } from "firebase/firestore"
import {Link} from "react-router-dom"

export const CartContainer = () => {
  const [id,setId] = useState("")

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: ""
  })
  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext()

  const generarOrden = (evt) => {
    evt.preventDefault()

    const order = {}
    order.buyer = dataForm
    order.items = cartList.map(({ name, id, price, cantidad }) => ({ id, name, price, cantidad }))
    order.total = precioTotal()
    console.log(order)

    // insertar la orden a firebase
    const dbFirestore = getFirestore()
    const ordersCollection = collection(dbFirestore, 'orders')

    addDoc(ordersCollection, order)
      // .then(resp => alert(`id de la compra: ${resp.id}`))
      .then(resp => setId(resp.id))
      .catch(err=> console.log(err))
      .finally(()=>{
        setDataForm({
          name: "",
          phone: "",
          email: ""
        })
        setTimeout(()=> {
          vaciarCarrito()
          setId("")
        }, 5000)
        
      })



  }

  const handleOnChange = (evt) => {
    console.log("nombre del input", evt.target.name)
    console.log("valor del input", evt.target.value)
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value
    })
  }





  return (
    <div>
      {id.length !== 0 && <h3>El id de la orden de la compra es : {id} </h3>}
      {cartList.length !== 0 ?
        <>
          {cartList.map(prod => (
            <div className="w-50">
              <img className="w-25" src={prod.foto} alt="imagen" />
              <label>Precio: {prod.price} - Cantidad : {prod.cantidad}</label>
              <button onClick={()=>eliminarProducto(prod.id)}>X</button>
            </div>

          ))}
          <h3>Precio total de la compra: {precioTotal()} </h3>
          <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar carrito </button>
          <form onSubmit={generarOrden}>
            <input type="text" name="name" onChange={handleOnChange} value={dataForm.name} placeholder="ingrese el nombre" />
            <input type="text" name="phone" onChange={handleOnChange} value={dataForm.phone} placeholder="ingrese el telefono" />
            <input type="text" name="email" onChange={handleOnChange} value={dataForm.email} placeholder="ingrese el email " />


            <button className="btn btn-outline-danger">Generar orden </button>
          </form>
        </>

        : 
        <div>
          <h2>No hay productos en el carrito </h2>
          <Link to='/'>Segui comprando</Link>
        </div>
      }


    </div>
  )
}
