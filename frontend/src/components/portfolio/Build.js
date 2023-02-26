import React from "react";
import CreatePortfolio from "./CreatePortfolio";
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
                                    <CreatePortfolio token={this.props.token} /> 
                                </div>
                            </div>
                </div>);
    }
}