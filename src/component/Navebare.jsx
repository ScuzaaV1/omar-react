import React from 'react'
import { Button, Container, Form, NavDropdown, Navbar } from 'react-bootstrap'
import { CiSearch } from "react-icons/ci";
import { HiShoppingCart } from "react-icons/hi";
import './Navebare.css';
import { MdOutlineShoppingCart } from "react-icons/md";

const Navebare = () => {
  return (
    <div className='nav' >
        <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
        <Navbar.Brand href="#" className='name' >
            Gaming Zone
            <HiShoppingCart id ="eshop"/> 
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
            <CiSearch  id="Ciserach"/>
            </Button>
          
            <MdOutlineShoppingCart  id ="linecard"/>
            <h4>Card</h4>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navebare
