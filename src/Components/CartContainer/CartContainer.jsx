import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

export const CartContainer = () => {
  const [id, setId] = useState("");
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext();

  const generarOrden = (evt) => {
    evt.preventDefault();

    if (dataForm.name === "" || dataForm.phone === "" || dataForm.email === "") {
      alert("Por favor, complete todos los campos del formulario.");
    } else {
      const order = {
        buyer: dataForm,
        items: cartList.map(({ name, id, price, cantidad }) => ({ id, name, price, cantidad })),
        total: precioTotal()
      };
      

      const dbFirestore = getFirestore();
      const ordersCollection = collection(dbFirestore, 'orders');

      addDoc(ordersCollection, order)
        .then(resp => setId(resp.id))
        .catch(err => console.log(err))
        .finally(() => {
          setDataForm({
            name: "",
            phone: "",
            email: ""
          });
          setTimeout(() => {
            vaciarCarrito();
            setId("");
          }, 5000);
        });
    }
  };

  const handleOnChange = (evt) => {
    console.log("nombre del input", evt.target.name);
    console.log("valor del input", evt.target.value);
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value
    });
  };

  return (
    <div>
      {id.length !== 0 && <h3>El id de la orden de la compra es: {id} </h3>}
      {cartList.length !== 0 ?
        <Cart
          cartList={cartList}
          vaciarCarrito={vaciarCarrito}
          generarOrden={generarOrden}
          handleOnChange={handleOnChange}
          dataForm={dataForm}
          precioTotal={precioTotal}
          eliminarProducto={eliminarProducto}
        />
        :
        <div>
          <h2>No hay productos en el carrito</h2>
          <Link to="/">Seguir comprando</Link>
        </div>
      }
    </div>
  );
};
