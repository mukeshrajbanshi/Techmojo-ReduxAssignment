import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import { FaCartPlus} from "react-icons/fa"

function NavbarHeader() {
  const {cart} = useSelector((state)=> state.shop)

    return (
        <>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Shopping Mart</Navbar.Brand>
          <Nav className="me-auto" >
            <Link style = {{margin : "10px", color :"white"}} to = "/">Home</Link>
            <Link style = {{margin : "10px", color : "white"}} to = "/cartDetails">CartDetails</Link>
          </Nav>
          <Link to="/cartDetails">
            <FaCartPlus size={50}/>
          </Link>
            <h1 style={{ color :"white"}}><sup> {cart.length}</sup></h1>
          
       
        </Container>
      </Navbar>
        </>
    )
}

export default NavbarHeader