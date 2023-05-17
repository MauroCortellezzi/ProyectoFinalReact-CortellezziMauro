import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { useCartContext } from "../../context/CartContext"


const CartWidget = () => {
  const {cantidadTotal} = useCartContext()
  return (
    <div >
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="black " />
        <strong>{cantidadTotal() !== 0 && cantidadTotal()}</strong>
    </div>
  )
}

export default CartWidget
