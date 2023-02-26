import React from "react";
//import { getAllPortfolios } from "../services/portfolioFunctions";
import axios from "axios";
import Loading from "../common/Loading";
import Header from "../common/Header";

export default class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            portfoliolist: [],
            isloaded: true
        };
        
        this.source = axios.CancelToken.source();
        this.checkLoginStatus = this.checkLoginStatus.bind(this);
    }

    async componentDidMount(){
        try{
            if(this.checkLoginStatus()){
                await axios.get('http://localhost:8000/portfolio/' + this.props.token , { cancelToken: this.source.token })
                .then( res => {
                    setTimeout(() => {
                        this.setState({
                            portfoliolist: res.data,
                            isloaded: false
                        });
                    }, 1000);
                });
            }else{
                this.props.history.push("/login");
            }
        }catch(error){
            console.log(error.message);
        }
    }    

    render(){
        if(this.state.isloaded){
            return(<Loading />);
        }

        else{   
                
                return(<div className="flex-shrink-0">
                            <Header />
                            <div className="container-fluid p-85">    
                                <div className="p-4 m-3 rounded">
                                    <div className="row"> 
                                            {this.state.portfoliolist.map(portfolio => (
                                                <div className="col-sm-3 p-4" key={portfolio.stk_ID}>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{portfolio.stk_portfolio_name}</h5>
                                                            <p className="card-text">{portfolio.stk_portfolio_description}</p>
                                                            <a href="/manage" className="btn btn-success btn-sm">Manage</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>    
                            </div>
                    </div>);
        }            
    }
    
    componentWillUnmount(){
        if (this.source) {
            this.source.cancel("Unmounted Component");
        }
        this._isMounted = false;
    }

    checkLoginStatus(){
        if(this.props.token != null){
            return true;
        }else{
            return false;
        }
    }
}