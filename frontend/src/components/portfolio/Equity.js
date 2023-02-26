import React from "react";
import { Form, FormControl, FloatingLabel, FormSelect } from 'react-bootstrap';
import { FiArrowRightCircle } from "react-icons/fi";

/** stocks data */
import stocklist from "../data/sectors.json";
import allstocks from "../data/all.json";
import defaultdata from "../data/default.json";
import { data, loadtickers, searchticker } from "../services/portfolioFunctions";
import PortfolioSubNav from "./PortfolioSubNav";

import Header from "../common/Header";

export default class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stocks: allstocks,
            stocksall: '',
            stockvalues: defaultdata,
            stocksearch: ''
        }
        this.handleStockSelect = this.handleChange.bind(this);
        this.handleReportClick = this.handleReportClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event){
        const jsondoc  = event.target.value;
        const stkData = data(jsondoc);
        this.setState({stocks: stkData});
    }

    handleReportClick(event){
        const data = loadtickers(this.state.stocks, event.target.value);
        this.setState({stockvalues: data});
    }

    handleSearch(event){
        this.setState({
            stockall: data("all")
        });
        const searchstock = searchticker(this.state.stockall, event.target.value);
        this.setState({stockvalues: searchstock});
    }

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
                                                            <h2>List of Stocks</h2><br />
                                                            <div className="col-12 m-4"></div>
                                                            <Form>
                                                                <FloatingLabel controlId="floatingTextarea" label="Search Stock Ticker" className="mb-3">
                                                                    <FormControl value={this.state.searchticker} placeholder="Search Stock Ticker" onChange={this.handleSearch} />
                                                                </FloatingLabel>
                                                            </Form>

                                                            <FormSelect aria-label="Default select example" onChange={this.handleStockSelect}>
                                                                <option value="all">Sort by Canadian Stocks</option>
                                                                {stocklist.map((item, i) => (
                                                                   <option key={i} value={item.label}>{item.name}</option>                                                                    
                                                                ))}
                                                            </FormSelect>
                                                                    
                                                            <div className="col-12 m-4"></div>
                                                            <table className="table table-striped">
                                                                <thead className="table-light">
                                                                    <tr>
                                                                        <th scope="col" width="30%">Stock Symbol</th>
                                                                        <th scope="col" width="45%">Name</th>
                                                                        <th scope="col" width="15%"></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {this.state.stocks.map((stkItems, i) => (
                                                                        <tr key={i}>
                                                                                <td>{stkItems.Symbol}</td>
                                                                                <td>{stkItems.Name}</td>
                                                                                <td>
                                                                                    <button className="bt-sm btn btn-sm btn-success" value={stkItems.Symbol} onClick={this.handleReportClick} role="button">Report <FiArrowRightCircle /></button>
                                                                                </td>  
                                                                        </tr>                                                            
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                    </div>
                                            </div> 
                                            
                                            <div className="col-sm-6 p-4">     
                                                    <div className="col-12 m-4"></div>
                                                    <h4>Information</h4>
                                                    <table className="table table-fixed">
                                                            <thead className="table-light">
                                                                <tr>
                                                                    <th scope="col">Stock Ticker</th>
                                                                    <th scope="col">Sector</th>
                                                                    <th scope="col">Company</th>
                                                                    <th scope="col"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {this.state.stockvalues.map((stkItems, i) => (
                                                                    <tr key={i}>
                                                                        <td>{stkItems.Symbol}</td>
                                                                        <td>{stkItems.Sector}</td>
                                                                        <td>{stkItems.Name}</td>
                                                                        <td></td>
                                                                    </tr>                                           
                                                                ))}
                                                            </tbody>
                                                    </table>
                                                    <br />
                                                    <br />
                                                    <h4>Performance</h4>
                                                    <table className="table table-fixed">
                                                            <thead className="table-light">
                                                                <tr>
                                                                    <th scope="col">Last Price</th>
                                                                    <th scope="col">Change</th>
                                                                    <th scope="col">% Change</th>
                                                                    <th scope="col">Open</th>
                                                                    <th scope="col">High</th>
                                                                    <th scope="col">Low</th>
                                                                    <th scope="col">Volume</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody> 
                                                                {this.state.stockvalues.map((stkItems, i) => (
                                                                    <tr key={i}>
                                                                        <td>{stkItems.Last}</td>
                                                                        <td>{stkItems.Change}</td>
                                                                        <td>{stkItems.Chg}</td>
                                                                        <td>{stkItems.Open}</td>
                                                                        <td>{stkItems.High}</td>
                                                                        <td>{stkItems.Low}</td>
                                                                        <td>{stkItems.Volume}</td>
                                                                    </tr>                                           
                                                                ))}
                                                            </tbody>
                                                    </table>
                                            </div>
                                        </div>
                                </div>
                            </div>
                </div>);
    }
}