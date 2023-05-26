import React from "react";

const CartMap = ({ prod, eliminarProducto }) => {
  return (
    <div className="w-50">
      <img className="w-25" src={prod.foto} alt="imagen" />
      <label>Precio: {prod.price} - Cantidad: {prod.cantidad}</label>
      <button onClick={() => eliminarProducto(prod.id)}>X</button>
    </div>
  );
};

export default CartMap;