
import './App.css'
import { CartContainer } from './Components/CartContainer/CartContainer'


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
       
 
      
        <Route path='*' element={<Navigate to="/" />} /> 
      </Routes>
    



    </Router>
    </CartContextProvider>
  )
}

export default App
