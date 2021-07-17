
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar1.css';
import { IconContext } from 'react-icons';



export default function Navibarcomp() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <Navbar bg="warning" variant="dark">


        <>
          <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </>

        <Navbar.Brand href="#home">DeliverAgentService</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          {/* <Nav.Link href="/signup">Sign Up</Nav.Link> */}

          <NavDropdown title="User" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/Signup">Sign up</NavDropdown.Item>
            <NavDropdown.Item href="/Signin">Sign In</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item> */}
          </NavDropdown>

          <Nav.Link href="/admin">Admin</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>




        </Nav>
      </Navbar>

    </div>
  )
}