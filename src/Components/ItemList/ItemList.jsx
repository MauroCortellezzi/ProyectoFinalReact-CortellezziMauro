import { Link } from "react-router-dom"
import Item from "../Item/Item"
import { memo } from "react"

// memo = memoriza estados y props, memo(componente) , memo(componente, funcion comparadora)
const ItemList = memo(  ({ productos }) => {
        return (
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
    
                {productos.map( producto => <Item key={producto.id} {...producto} />
                    )
                }
    
            </div>
        )
    }

)



export default ItemList