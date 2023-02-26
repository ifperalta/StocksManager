import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import PortfolioSubNav from "./PortfolioSubNav";
import { FiBarChart, FiFilePlus, FiArrowRightCircle } from "react-icons/fi";
import Loading from "../common/Loading";

import Header from "../common/Header";

axios.interceptors.request.use(null, error =>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("Logging the error", error);
        console.log("An unexpected error occured");
    }
    return Promise.reject(error);
});

export default class MyPortfolio extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                portfoliolist: [],
                isloaded: true
        }
        
        this._isMounted = false; // this is experimental
        this.source = axios.CancelToken.source();
    }

    async componentDidMount(){
        try{
            await axios.get('http://localhost:8000/portfolio/' + this.props.token, { cancelToken: this.source.token })
            .then( res => {
                setTimeout(() => {
                    this.setState({
                        portfoliolist: res.data,
                        isloaded: false
                    });
                }, 1000);
            });
        }catch(error){
            console.log(error.message);
        }
        
    }

    render(){
        let componentdata = '';
        if(this.state.isloaded){
            componentdata = <Loading pagename="My Portfolio" />;

        }else{
            componentdata = <div className="row p-3">
                        {this.state.portfoliolist.map( portfolio => (
                            <div className="col-3 p-4 m-3  bg-light rounded shadow-sm" key={portfolio.stk_ID}>
                                <div className="row">
                                    <div className="col-sm-12 pb-3">
                                        <h2 className="mt-4 mb-4">{portfolio.stk_portfolio_name}</h2>
                                        <NavLink className="btn btn-sm btn-success bt-space-1" to="/build" role="button">Manage <FiFilePlus /></NavLink>
                                        <div className="col-12 mt-4">{portfolio.stk_portfolio_description}</div>
                                    </div> 
                                </div>
                            </div> 
                        ))}
                    </div>;
        }

        return(<div className="flex-shrink-0">
                    <Header />    
                    <div className="container-fluid p-85">    
                            <div className="m-5"></div>
                                <div className="m-3 rounded bg-light rounded shadow-sm">
                                    <PortfolioSubNav />
                                </div>  
                                {componentdata}
                    </div>
            </div>);
    }
    
    
    componentWillUnmount(){
        if (this.source) {
            this.source.cancel("Unmounted Component");
        }
        this._isMounted = false;
    }
}