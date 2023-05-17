import { createContext, useContext, useState } from "react";



const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])


    const addToCart = (newProduct) => {
            const idx = cartList.findIndex(prod => newProduct.id === prod.id)


            if (idx === -1) {
                
                setCartList([
                    ...cartList,
                    newProduct
                ])    

            } else {
                // cartList[idx].cantidad = cartList[idx].cantidad + newProduct.cantidad
                cartList[idx].cantidad += newProduct.cantidad
                setCartList([...cartList])
            }


        //agregar logica de producto repetido
       

    }

    //cantidad total de productos
    const cantidadTotal = () => cartList.reduce((total, objProd) => total += objProd.cantidad , 0)

    //precio total de la compra
    const precioTotal = () => cartList.reduce((total, objProducto)=> total += (objProducto.cantidad * objProducto.price) , 0)

    //eliminar x item

    const eliminarProducto = (pid)=>{
        setCartList(cartList.filter(prod => prod.id !== pid))
    } 

    // vaciarCarrito

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}

        </CartContext.Provider>

    )
}