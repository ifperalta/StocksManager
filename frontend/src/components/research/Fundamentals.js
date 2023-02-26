import React from "react";
import { Nav, NavLink, Navbar} from 'react-bootstrap';

import Header from "../common/Header";

export default class Fundamentals extends React.Component{
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
                                    <div className="row"> 
                                            <div className="col-sm-3">
                                                <div className="card">
                                                    <div className="card-header">
                                                        Portfolio 1
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">All Seasons</h5>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                        <a href="report" className="btn btn-sm btn-success">View Report</a>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="col-sm-3">
                                                <div className="card">
                                                    <div className="card-header">
                                                        Portfolio 2
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Test 1 Portolio</h5>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                        <a href="report" className="btn btn-sm btn-success">View Report</a>
                                                    </div>
                                                </div>
                                            </div> 

                                            <div className="col-sm-3">
                                                <div className="card">
                                                    <div className="card-header">
                                                        Portfolio 3
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Test 2 Portolio</h5>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                        <a href="report" className="btn btn-sm btn-success">View Report</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-3">
                                                <div className="card">
                                                    <div className="card-header">
                                                        Portfolio 4
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Test 3 Portolio</h5>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                        <a href="report" className="btn btn-sm btn-success">View Report</a>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                </div>);
    }
}