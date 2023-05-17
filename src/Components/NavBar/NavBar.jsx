import CartWidget from "../CartWidget/CartWidget"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBell} from "@fortawesome/free-solid-svg-icons"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, NavLink } from "react-router-dom";

const categorias = [
  {id : "1", categoria: "PC" , name: "PC", descripcion: "esto es una pc"},
  {id : "2", categoria: "IPHONE" , name: "IPHONE", descripcion: "esto es una iphone"},
  {id : "3", categoria: "TABLET" , name: "TABLET", descripcion: "esto es una tablet"}



]


const NavBar = () => {
  
  return (
 <>
    <Navbar bg="light" variant="light">
    <Container>
    <FontAwesomeIcon icon={faBell}/>
    <Link to="/" className="alert alert-success" >La Tienda</Link>
      <Nav className="me-auto">
        
        {categorias.map(categoria => <NavLink key={categoria.id} to={`/categoria/${categoria.categoria}`} className={(isActive)=>isActive ? "btn btn-primary" : "btn btn-outline-primary"}>{categoria.name}</NavLink>
 )}
          
      </Nav>
      <Nav>
        <Link to="/cart">
        <CartWidget />
        </Link>
      
          </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default NavBar
