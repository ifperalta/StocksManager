import React from "react";
import { Form } from 'react-bootstrap';
import axios from "axios";

export default class Portfoliolist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            portfoliolist: []
        }
        this._isMounted = false;
    }    

    async componentDidMount(){
        try{
            const { data : portfolio } = await axios.get('http://localhost:8000/portfolio');
            this.setState({  portfoliolist: portfolio });
        }catch(error){
            console.log(error.message);
        }

        this._isMounted = true;
    }
    
    render(){
        return(<div className="col-sm-7 p-4">
                        <h2>My Portfolio</h2><br />
                        <div className="col-10">
                            <Form.Select aria-label="Default select example">
                                <option>My Portfolios</option>
                                {this.state.portfoliolist.map(portfolio => (
                                    <option key={portfolio.stk_ID}>{portfolio.stk_portfolio_name}</option>
                                ))}
                            </Form.Select>
                        </div>
                                                    
                        <div className="col-12 m-4"></div>

                        <table className="table table-fixed">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">Stock Ticker</th>
                                        <th scope="col">Sector</th>
                                        <th scope="col">Shares</th>
                                        <th scope="col">Portfolio %</th>
                                        <th scope="col">Open</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>AAPL</td>
                                        <td>Technology</td>
                                        <td>15</td>
                                        <td>5%</td>
                                        <td>$250</td>
                                        <td>
                                            <a className="btn btn-sm btn-dark bt-space-1" href="/manage" role="button">Manage</a>
                                            <button className="btn btn-sm btn-dark" role="button">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                </div>);
    }

    componentWillUnmount(){
        this._isMounted = false;
    }
}