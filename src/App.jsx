
import './App.css'
import { CartContainer } from './Components/CartContainer/CartContainer'
import ItemCount from './Components/ItemCount/ItemCount'
import { ItemDetail } from './Components/ItemDetail/ItemDetail'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CartContextProvider } from './context/CartContext'




function App() {

  return (
    <CartContextProvider >
    <Router >
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer  />}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer  />}/>
        <Route path='/detail/:pid' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<CartContainer />}/> 
        {/* <Route path='/notfound' element={<NotFound404 />}/>   */}
 
        {/* CartContainer es solo ejemplo no entra en desafio */}
        <Route path='*' element={<Navigate to="/" />} /> 
      </Routes>
      {/* <ItemCount /> */}



    </Router>
    </CartContextProvider>
  )
}

export default App
