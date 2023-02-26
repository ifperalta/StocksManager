import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

export default class PortfolioSubNav extends React.Component{
    render(){
        return(<nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse p-1" id="navbarNav">
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto sub-navigation">
                                    <NavLink to="/myportfolio" className="sub-nav">My Portfolio</NavLink>
                                    <NavLink to="/build" className="sub-nav">Build Portfolio</NavLink>
                                    <NavLink to="/lists" className="sub-nav">Lists of Stocks</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                    </div>
                </nav>);
    }
}