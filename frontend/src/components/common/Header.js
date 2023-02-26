import React from "react";
import { FiBarChart, FiFileText, FiSearch, FiAperture  } from "react-icons/fi";
import { Nav, NavItem, Navbar, Container, } from 'react-bootstrap';
import { NavLink, Redirect } from "react-router-dom";

import axios from "axios";

axios.interceptors.request.use(null, error =>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("Logging the error", error);
        console.log("An unexpected error occured");
    }
    return Promise.reject(error);
});

export default class Header extends React.Component{
    render(){ 
            return (<div>
                <nav className="navbar navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                            <div className="col-lg-10">
                                <Navbar variant="dark" className="nav-con">
                                    <Container>
                                        <NavLink to="/" className="branding"><FiAperture /> <span>StockOH</span></NavLink>
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="me-auto">
                                                <NavLink to="/portfolio" className="main-nav"><FiBarChart /> Portfolio Management</NavLink>
                                                <NavLink to="/scanner" className="main-nav"><FiSearch /> Scanner</NavLink>
                                                <NavLink to="/news" className="main-nav"><FiFileText /> News and Insights</NavLink>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </div>
                            <div className="col-lg-2">
                                <Nav className="me-auto acc-nav">
                                    <NavItem>
                                        <NavLink to="/account" className="btn-sm btn-success ac-bt rounded">Account Settings</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/signout" className="btn-sm btn-success ac-bt rounded">Sign Out</NavLink>
                                    </NavItem>
                                </Nav>
                            </div>    
                    </div>
                </nav>
            </div>);
    }
}   