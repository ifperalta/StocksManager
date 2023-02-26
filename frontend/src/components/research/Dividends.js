import React from "react";
import { Nav, NavLink, Navbar} from 'react-bootstrap';

import Header from "../common/Header";

export default class Dividends extends React.Component{
    render(){
        return(<div className="flex-shrink-0">
                            <Header/>
                            <div className="container-fluid p-85">    
                                <div className="m-5"></div>
                                <div className="m-3 rounded bg-light rounded shadow-sm">
                                        <nav className="navbar navbar-expand-lg navbar-light">
                                        <div className="collapse navbar-collapse p-1" id="navbarNav">
                                                <Navbar.Collapse id="basic-navbar-nav">
                                                    <Nav className="me-auto">
                                                        <NavLink href="/stocks" className="sub-nav">Lists of Canadian Stocks</NavLink>
                                                        <NavLink href="/earnings" className="sub-nav">Earnings</NavLink>
                                                        <NavLink href="/dividends" className="sub-nav">Dividends Calendar</NavLink>
                                                    </Nav>
                                                </Navbar.Collapse>
                                        </div>
                                        </nav>    
                                </div>    
                                <div className="m-5"></div>
                                <div className="m-4">
                                    <div className="row"> Dividend Dates </div>
                                </div>
                            </div>
                </div>);
    }
}