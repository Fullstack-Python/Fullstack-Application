import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const NavBarMenu = () => {
    return (
        <div>
          <Navbar expand="lg" className="bg-body-tertiary">
               <Navbar.Brand href="#home">Movies</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className="show-movies-nav" to ="/ ">Movies </NavLink>
                    <NavLink className="add-movie-nav" to ="/addMovie"> Add Movie </NavLink>
                </Nav>
               </Navbar.Collapse>
          </Navbar>
        </div>
    );
};

export default NavBarMenu;