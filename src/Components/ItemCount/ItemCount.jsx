import { useCounter } from "../hook/useCounter"

const ItemCount = ({initial=1, stock=5, onAdd}) =>{
    
    const {counter, handleSumar, handleRestar} = useCounter(initial,1,stock)
  

    return(
        <center>
            <button onClick={handleSumar}> + 1</button>
            <label>{counter} </label>
            <button onClick={handleRestar}> - 1</button>
            {/* <p>Cantidad de renderizados: {renderCount.current}</p> */}
            <button onClick={()=>{onAdd(counter)}}>Agregar al carrito</button>
        </center>
    )
}


export default ItemCount