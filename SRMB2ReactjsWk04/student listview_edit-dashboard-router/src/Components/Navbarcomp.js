import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
export default function Navbarcomp(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Student</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/view">View</Nav.Link>
          <Nav.Link href="/edit">Edit</Nav.Link>
          <Nav.Link href="/add">Add</Nav.Link>
          
         </Nav>  
      </Navbar>
        </div>
    )
}