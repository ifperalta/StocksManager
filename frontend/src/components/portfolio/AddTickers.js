import React from "react";
import { FormSelect } from "react-bootstrap";
import axios from "axios";

import stocklist from "../data/sectors.json";
import allstocks from "../data/all.json";
import defaultdata from "../data/default.json";
import { data, loadtickers, searchticker } from "../services/portfolioFunctions";

import { FiPlusCircle } from "react-icons/fi";

export default class AddTickers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stocks: allstocks,
            stockvalues: defaultdata,
            isNotification: false,
            stockSymbol: ""
        }
        this.handleStockSelect = this.handleChange.bind(this);
        this.handleAddToPortofolio = this.handleAddToPortofolio.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event){
        const jsondoc  = event.target.value;
        const stkData = data(jsondoc);
        this.setState({stocks: stkData});
    }

    async handleAddToPortofolio(event){
        const data = loadtickers(this.state.stocks, event.target.value);
        let list = {
            stk_uid: this.props.portfolioID,
            stk_lists_ticker: data[0].Symbol,
            stk_lists_sector: data[0].Sector
        }

        try{
            await axios.post('http://localhost:8000/build-portfoliolist/', list)
            .then((response) => {
                if(response.data){
                    this.setState({ 
                        isNotification: true,
                        stockSymbol: event.target.value });
                }
            });
    
            setTimeout(() => {
                this.setState({ isNotification: false });
            }, 2000);
        }catch(error){
            console.log(error);
        }
    }

    handleSearch(event){
        this.setState({
            stockall: data("all")
        });
        const searchstock = searchticker(this.state.stockall, event.target.value);
        this.setState({stockvalues: searchstock});
    }

    render(){
        if(this.props.portfolioID == 0){
            return(<div className="row">
                        <div className="col-12 m-2">
                                Select A Portolio     
                        </div>
                   </div>);
        }else{
            return(<div className="row">
                        <div className="col-12 m-2"></div>
                        <div className="col-sm-8">
                                <h5>Select a sector</h5><br />
                                <div className="col-sm-12">
                                    <FormSelect aria-label="Default select example" onChange={this.handleStockSelect}>
                                        <option value="all">All Canadian Stocks</option>                                        
                                        {stocklist.map((item, i) => (
                                            <option key={i} value={item.label}>{item.name}</option>                                                                    
                                        ))}
                                    </FormSelect>
                                </div>
                        </div> 
                        <div className="col-12 m-2"></div>  
                        <div className={`col-10 ${this.state.isNotification ? 'd-active' : 'd-none'}` }>
                            <div className={`alert alert-success ${this.state.isNotification ? 'alert-shown' : 'alert-hidden'}`}>
                                Successfully added <b>{this.state.stockSymbol}</b> to <b>{this.props.portfolioName}</b> portfolio.
                            </div>
                        </div>                      
                        <div className="col-sm-10">
                            <table className="table table-fixed">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">Stock Ticker</th>
                                            <th scope="col">Sector</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.stocks.map((stkItems, i) => (
                                            <tr key={i}>
                                                    <td>{stkItems.Symbol}</td>
                                                    <td>{stkItems.Name}</td>
                                                    <td>
                                                        <button className="bt-sm btn btn-sm btn-success" value={stkItems.Symbol} onClick={this.handleAddToPortofolio} role="button">Add <FiPlusCircle /></button>
                                                    </td>  
                                            </tr>                                                            
                                        ))}
                                    </tbody>
                            </table>
                        </div>
            </div>);
        }
    }
}