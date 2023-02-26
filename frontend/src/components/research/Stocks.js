import React from "react";
import { Nav, NavLink, Navbar, FormSelect} from 'react-bootstrap';
import { BsFillCircleFill, BsFillCaretRightSquareFill } from "react-icons/bs";

import stocklist from "../data/sectors.json";

import Header from "../common/Header";
export default class Stocks extends React.Component{
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
                                        <h2>List of Canadian Stocks</h2>
                                        <div className="col-sm-5 p-4">
                                                <FormSelect aria-label="Default select example" onChange={this.handleStockSelect}>
                                                    <option value="all">All Canadian Stocks</option>
                                                    {stocklist.map((item, i) => (
                                                        <option key={i} value={item.label}>{item.name}</option>                                                                    
                                                    ))}
                                                </FormSelect>
                                            <div className="m-4"></div>
                                            <table className="table table-striped scanner-tbl">
                                                    <thead>
                                                        <tr>  
                                                                <th scope="col"></th>
                                                                <th scope="col">Ticker</th>
                                                                <th scope="col">%Change</th>
                                                                <th scope="col">Open</th>
                                                                <th scope="col">High</th>
                                                                <th scope="col">Low</th>
                                                                <th scope="col">Close</th>
                                                                <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                                <td><BsFillCircleFill className="green" /></td>       
                                                                <td>AAPL</td>
                                                                <td className="text-success"><b>2.5%</b></td>
                                                                <td>120.35</td>
                                                                <td>121.21</td>
                                                                <td>118.92</td>
                                                                <td>120.59</td>
                                                                <td><a href="" className="green"><BsFillCaretRightSquareFill /></a></td>
                                                        </tr>
                                                        <tr>                                                  
                                                                <td><BsFillCircleFill className="green" /></td> 
                                                                <td>AAPL</td>
                                                                <td className="text-success"><b>2.5%</b></td>
                                                                <td>120.35</td>
                                                                <td>121.21</td>
                                                                <td>118.92</td>
                                                                <td>120.59</td>
                                                                <td><a href="" className="green"><BsFillCaretRightSquareFill /></a></td>
                                                        </tr>
                                                        <tr>    
                                                                <td><BsFillCircleFill className="green" /></td>
                                                                <td>AAPL</td>
                                                                <td className="text-success"><b>2.5%</b></td>
                                                                <td>120.35</td>
                                                                <td>121.21</td>
                                                                <td>118.92</td>
                                                                <td>120.59</td>
                                                                <td><a href="" className="green"><BsFillCaretRightSquareFill /></a></td>
                                                        </tr>
                                                        <tr>  
                                                                <td><BsFillCircleFill className="green" /></td> 
                                                                <td>AAPL</td>
                                                                <td className="text-success"><b>2.5%</b></td>
                                                                <td>120.35</td>
                                                                <td>121.21</td>
                                                                <td>118.92</td>
                                                                <td>120.59</td>
                                                                <td><a href="" className="green"><BsFillCaretRightSquareFill /></a></td>
                                                        </tr>
                                                        <tr>  
                                                                <td><BsFillCircleFill className="green" /></td> 
                                                                <td>AAPL</td>
                                                                <td className="text-success"><b>2.5%</b></td>
                                                                <td>120.35</td>
                                                                <td>121.21</td>
                                                                <td>118.92</td>
                                                                <td>120.59</td>
                                                                <td><a href="" className="green"><BsFillCaretRightSquareFill /></a></td>
                                                        </tr>
                                                        <tr>  
                                                                <td><BsFillCircleFill className="green" /></td> 
                                                                <td>AAPL</td>
                                                                <td className="text-success"><b>2.5%</b></td>
                                                                <td>120.35</td>
                                                                <td>121.21</td>
                                                                <td>118.92</td>
                                                                <td>120.59</td>
                                                                <td><a href="" className="green"><BsFillCaretRightSquareFill /></a></td>
                                                        </tr>
                                                        <tr>  
                                                                <td><BsFillCircleFill className="green" /></td> 
                                                                <td>AAPL</td>
                                                                <td className="text-success"><b>2.5%</b></td>
                                                                <td>120.35</td>
                                                                <td>121.21</td>
                                                                <td>118.92</td>
                                                                <td>120.59</td>
                                                                <td><a href="" className="green"><BsFillCaretRightSquareFill /></a></td>
                                                        </tr>
                                                        <tr>  
                                                                <td><BsFillCircleFill className="blue"/></td> 
                                                                <td className="text-primary darkblue">AAPL</td>
                                                                <td className="text-primary darkblue"><b>2.5%</b></td>
                                                                <td className="text-primary darkblue">120.35</td>
                                                                <td className="text-primary darkblue">121.21</td>
                                                                <td className="text-primary darkblue">118.92</td>
                                                                <td className="text-primary darkblue">120.59</td>
                                                                <td><a href="" className="green"><BsFillCaretRightSquareFill /></a></td>
                                                        </tr>
                                                        <tr>  
                                                                <td><BsFillCircleFill className="blue"/></td> 
                                                                <td className="text-primary darkblue">AAPL</td>
                                                                <td className="text-primary darkblue"><b>2.5%</b></td>
                                                                <td className="text-primary darkblue">120.35</td>
                                                                <td className="text-primary darkblue">121.21</td>
                                                                <td className="text-primary darkblue">118.92</td>
                                                                <td className="text-primary darkblue">120.59</td>
                                                                <td><a href="" className="green"><BsFillCaretRightSquareFill /></a></td>
                                                        </tr>
                                                        <tr>  
                                                                <td><BsFillCircleFill className="blue"/></td> 
                                                                <td className="text-primary darkblue">AAPL</td>
                                                                <td className="text-primary darkblue"><b>2.5%</b></td>
                                                                <td className="text-primary darkblue">120.35</td>
                                                                <td className="text-primary darkblue">121.21</td>
                                                                <td className="text-primary darkblue">118.92</td>
                                                                <td className="text-primary darkblue">120.59</td>
                                                                <td><a href="" className="green"><BsFillCaretRightSquareFill /></a></td>
                                                        </tr>
                                                        <tr>  
                                                                <td><BsFillCircleFill className="red"/></td> 
                                                                <td className="text-danger">AAPL</td>
                                                                <td className="text-danger"><b>2.5%</b></td>
                                                                <td className="text-danger">120.35</td>
                                                                <td className="text-danger">121.21</td>
                                                                <td className="text-danger">118.92</td>
                                                                <td className="text-danger">120.59</td>
                                                                <td><a href="" className="green"><BsFillCaretRightSquareFill /></a></td>
                                                        </tr>
                                                        <tr>  
                                                                <td><BsFillCircleFill className="red"/></td> 
                                                                <td className="text-danger">AAPL</td>
                                                                <td className="text-danger"><b>2.5%</b></td>
                                                                <td className="text-danger">120.35</td>
                                                                <td className="text-danger">121.21</td>
                                                                <td className="text-danger">118.92</td>
                                                                <td className="text-danger">120.59</td>
                                                                <td><a href="" className="green"><BsFillCaretRightSquareFill /></a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                        </div>                                        
                                </div>
                            </div>
                        </div>
                </div>);
    }
}