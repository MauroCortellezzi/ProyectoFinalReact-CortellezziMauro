import React from "react";
import CartMap from "../CartMap/CartMap";

const Cart = ({ cartList, vaciarCarrito, generarOrden, handleOnChange, dataForm, precioTotal, eliminarProducto }) => {
  return (
    <>
      {cartList.map(prod => (
        <CartMap key={prod.id} prod={prod} eliminarProducto={eliminarProducto} />
      ))}
      <h3>Precio total de la compra: {precioTotal()} </h3>
      <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar carrito</button>
      <form onSubmit={generarOrden}>
        <input type="text" name="name" onChange={handleOnChange} value={dataForm.name} placeholder="Ingrese el nombre" />
        <input type="text" name="phone" onChange={handleOnChange} value={dataForm.phone} placeholder="Ingrese el teléfono" />
        <input type="text" name="email" onChange={handleOnChange} value={dataForm.email} placeholder="Ingrese el email" />

        <button className="btn btn-outline-danger">Generar orden</button>
      </form>
    </>
  );
};

export default Cart;
