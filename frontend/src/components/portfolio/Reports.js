import React from "react";
import PortfolioSubNav from "./PortfolioSubNav";
import Header from "../common/Header";

export default class Portfolio extends React.Component{
    render(){
        return(<div className="flex-shrink-0">
                            <Header />
                            <div className="container-fluid p-85">    
                                <div className="m-5"></div>
                                <div className="m-3 rounded bg-light rounded shadow-sm">
                                        <PortfolioSubNav />
                                </div>    
                                <div className="m-4"></div>
                                <div className="p-4 m-3 bg-light rounded shadow-sm">
                                    <div className="row"> 
                                            <div className="col-sm-6 p-4">                      
                                                    <div className="col-12 m-4"></div>
                                                    <div className="col-12">
                                                            <table className="table table-striped">
                                                                <thead className="table-light">
                                                                    <tr>
                                                                        <th scope="col">Portolio Name</th>
                                                                        <th scope="col">Number Stocks</th>
                                                                        <th scope="col"></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="50%">Blue Chips Stocks</td>
                                                                        <td width="25%">5</td>
                                                                        <td width="25%">
                                                                            <a className="btn btn-sm btn-dark" href="#" role="button">Report</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="50%">Dividend Stocks</td>
                                                                        <td width="25%">5</td>
                                                                        <td width="25%">
                                                                            <a className="btn btn-sm btn-dark" href="#" role="button">Report</a>
                                                                        </td>
                                                                    </tr>                                                                    
                                                                    <tr>
                                                                        <td width="50%">Tech Companies</td>
                                                                        <td width="25%">5</td>
                                                                        <td width="25%">
                                                                            <a className="btn btn-sm btn-dark" href="/reports" role="button">Report</a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                    </div>
                                                    
                                            </div> 
                                            
                                            <div className="col-sm-6 p-4">
                                                    <h2>Performance </h2><br />
                                                                               
                                                    <div className="col-12 m-4"></div>

                                                    <table className="table table-fixed">
                                                            <thead className="table-light">
                                                                <tr>
                                                                    <th scope="col">Stock Ticker</th>
                                                                    <th scope="col">Sector</th>
                                                                    <th scope="col">Portfolio %</th>
                                                                    <th scope="col"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>AAPL</td>
                                                                    <td>Technology</td>
                                                                    <td>5%</td>
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