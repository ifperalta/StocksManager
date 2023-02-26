import React from "react";
//import { getAllPortfolioLists } from "../services/portfolioFunctions";

import { FiXCircle } from "react-icons/fi";
import axios from "axios";

axios.interceptors.request.use(null, error =>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("Logging the error", error);
        console.log("An unexpected error occured");
    }
    return Promise.reject(error);
});

export default class ManageTickers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            portfoliolist: [],
            isNotification: false,
            stockSymbol: ""
        }
        this.handleRemove = this.handleRemove.bind(this);
        
        // this is experimental
        this.source = axios.CancelToken.source();
    }

    async handleRemove(event){
        try{
            await axios.delete(`http://localhost:8000/delete-portfoliolist-entry/${event.target.value}`)
            .then((response) => {
                if(response.data){
                    this.setState({ isNotification: true });
                }
            });

            setTimeout(() => {
                this.setState({ isNotification: false });
            }, 2000);
        }catch(error){
            console.log(error);
        }
    }

    async componentDidUpdate(){
        try{
            //const {data: lists} = await getAllPortfolioLists(this.props.portfolioID);
            const { data: lists } = await axios.get('http://localhost:8000/portfoliolist/' + this.props.portfolioID, { cancelToken: this.source.token});
            
            this.setState({portfoliolist: lists});
        }catch(error){
            console.log(error.message);
        }
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
                        <div className="col-12">
                            <h5 className="mb-3">Lists of stocks inside {this.props.portfolioName} portfolio</h5>
                            <div className="col-12 m-4"></div>
                            <div className={`col-10 ${this.state.isNotification ? 'd-active' : 'd-none'}` }>
                                <div className={`alert alert-success ${this.state.isNotification ? 'alert-shown' : 'alert-hidden'}`}>
                                    Successfully removed in <b>{this.props.portfolioName}</b> portfolio.
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
                                            {this.state.portfoliolist.map((item, i) => (
                                                <tr key={i}>
                                                        <td>{item.stk_lists_ticker}</td>
                                                        <td>{item.stk_lists_sector}</td>
                                                        <td>
                                                            <button className="bt-sm btn btn-sm btn-success" value={item.stk_lists_id} onClick={this.handleRemove} role="button">Remove <FiXCircle /></button>
                                                        </td>  
                                                </tr>                                                            
                                            ))}
                                        </tbody>
                                </table>
                            </div> 
                        </div>
                </div>);
        }        
    }   
      
    componentWillUnmount(){
        if (this.source) {
            this.source.cancel("");
        }
    }
}