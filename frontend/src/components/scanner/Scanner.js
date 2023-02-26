import React from "react";
//import { Nav, Navbar, Form, InputGroup, Button, FormControl } from 'react-bootstrap';
import { BsFillCircleFill, BsFillCaretRightSquareFill } from "react-icons/bs";
import Loading from "../common/Loading";
import Header from "../common/Header";

import axios from "axios";

export default class Scanner extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                    isloaded: true,
                    stockData: [],
                };
                
                this.source = axios.CancelToken.source();
        }

        async componentDidMount(){
                try{
                        await axios.get('http://localhost:8000/scanner', { cancelToken: this.source.token })
                        .then( res => {
                                setTimeout(() => {
                                this.setState({
                                        stockData: res.data,
                                        isloaded: false
                                });
                                }, 1000);
                        });
                }catch(error){
                        console.log(error.message);
                }
        }    

        render(){
                if(this.state.isloaded){
                        return(<Loading pagename="Scanner" />);
                }
            
                else{        
                        return(<div className="flex-shrink-0">
                                        <Header />        
                                        <div className="container-fluid p-85">    
                                                <div className="m-5"></div>
                                                <div className="m-3">
                                                <div className="row"> 
                                                        <div className="col-sm-6 p-4">
                                                                <div className="col-12 m-2"></div> 
                                                                <h2 className="pd-btm-10">Daily Stocks Scanner - Gains</h2>
                                                                <div className="col-5 m-2"></div> 
                                                                <table className="table table-striped scanner-tbl">
                                                                        <thead>
                                                                                <tr>  
                                                                                        <th scope="col"></th>
                                                                                        <th scope="col">Ticker</th>
                                                                                        <th scope="col">Company Name</th>
                                                                                        <th scope="col">Close</th>
                                                                                        <th scope="col">High</th>
                                                                                        <th scope="col">Low</th>
                                                                                        <th scope="col">Change</th>
                                                                                        <th scope="col"></th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                                {this.state.stockData.map(data => (
                                                                                        (data[1].change > 0) ? (
                                                                                        <tr key={data[1].symbol}>
                                                                                                <td><BsFillCircleFill className={(data[1].change > 0) ? "green" : "red"} /></td>       
                                                                                                <td>{data[1].symbol}</td>
                                                                                                <td>{data[1].companyName}</td>
                                                                                                <td>{data[1].close}</td>
                                                                                                <td>{data[1].high}</td>
                                                                                                <td>{data[1].low}</td>
                                                                                                <td><b><label className={(data[1].change > 0) ? "green" : "red"}>{data[1].change}</label></b></td>
                                                                                                <td><BsFillCaretRightSquareFill className={(data[1].change > 0) ? "green" : "red"} /></td>
                                                                                        </tr>) : null
                                                                                ))}    
                                                                        </tbody>
                                                                        </table>

                                                        </div> 

                                                        <div className="col-sm-6 p-4">
                                                                <div className="col-12 m-2"></div> 
                                                                <h2 className="pd-btm-10">Losing</h2>
                                                                <div className="col-5 m-2"></div> 
                                                                <table className="table table-striped scanner-tbl">
                                                                        <thead>
                                                                                <tr>  
                                                                                        <th scope="col"></th>
                                                                                        <th scope="col">Ticker</th>
                                                                                        <th scope="col">Company Name</th>
                                                                                        <th scope="col">Close</th>
                                                                                        <th scope="col">High</th>
                                                                                        <th scope="col">Low</th>
                                                                                        <th scope="col">Change</th>
                                                                                        <th scope="col"></th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        {this.state.stockData.map(data => (
                                                                                        (data[1].change < 0) ? (
                                                                                        <tr key={data[1].symbol}>
                                                                                                <td><BsFillCircleFill className={(data[1].change > 0) ? "green" : "red"} /></td>       
                                                                                                <td>{data[1].symbol}</td>
                                                                                                <td>{data[1].companyName}</td>
                                                                                                <td>{data[1].close}</td>
                                                                                                <td>{data[1].high}</td>
                                                                                                <td>{data[1].low}</td>
                                                                                                <td><b><label className={(data[1].change > 0) ? "green" : "red"}>{data[1].change}</label></b></td>
                                                                                                <td><BsFillCaretRightSquareFill className={(data[1].change > 0) ? "green" : "red"} /></td>
                                                                                        </tr>) : null
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
}