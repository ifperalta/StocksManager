import React from "react";
import { Nav, NavLink, Navbar, Form, InputGroup, Button, FormControl } from 'react-bootstrap';
import axios from "axios";
import Loading from "../common/Loading";
import GetNews from "./GetNews";

import { Spinner } from "react-bootstrap";

import allstocks from "../data/all.json";

axios.interceptors.request.use(null, error =>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("Logging the error", error);
        console.log("An unexpected error occured");
    }
    return Promise.reject(error);
});


export default class LoadNews extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allstocks: allstocks,
            loadNews: true,
            allNewsData: []
       }
        this._isMounted = false; // this is experimental
        this.source = axios.CancelToken.source();
        this.handleSearchNews = this.handleSearchNews.bind(this);

        this.loadingTimer = this.loadingTimer.bind(this);
        this.loadNewsData = this.loadNewsData.bind(this);
    }

    async componentDidMount(){
        try{
            await axios.get('http://localhost:8000/news/', { cancelToken: this.source.token })
            .then( res => {
                setTimeout(() => {
                    this.setState({
                        allNewsData: res.data
                    });
                }, 1000);
            });
        }catch(error){
            console.log(error.message);
        }
    }
        
    async handleSearchNews(ticker){        
        await this.loadingTimer(); 
        await this.loadNewsData(ticker);       
    }

    async loadingTimer(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
                this.setState({
                    loadNews: false
                });
            }, 100);
        });
    }    

    async loadNewsData(ticker){
        try{
            await axios.get('http://localhost:8000/news/' + ticker, { cancelToken: this.source.token })
            .then( res => {
                setTimeout(() => {
                    this.setState({
                        allNewsData: res.data,
                        loadNews: true
                    });
                }, 1000);
            });
        }catch(error){
            console.log(error.message);
        }
    }

    render(){
        if(this.state.pageloading){
            return(<Loading pagename="Latest News" />);
        }

        else{   
            const contents = this.state.loadNews ? <GetNews allNewsData={this.state.allNewsData} /> : <Spinner animation="border" variant="success" />;
            return(<div className="row"> 
                                <div className="col-sm-6 p-4">
                                    <div className="row">
                                        <div className="col-8 m-2">
                                            <h2><a href="#" className="atag">Latest News</a></h2><br /> 
                                            <Form>
                                                <InputGroup className="mb-3">
                                                    <FormControl placeholder="Search Stock Ticker" />
                                                    <Button className="btn btn-success text-white" variant="outline-secondary" id="button-addon2">
                                                        Search
                                                    </Button>
                                                </InputGroup>
                                            </Form>    
                                        </div>
                                        <div className="col-10 m-2">
                                            <ul className="list-group list-group-flush">              
                                            {this.state.allstocks.map((ticker, i) => (
                                                <li  className="list-group-item" key={i} role="button" onClick={() => this.handleSearchNews(ticker.Symbol)}>
                                                    {ticker.Symbol} - {ticker.Name}
                                                </li>
                                            ))}
                                            </ul>
                                        </div>
                                    </div>    
                                </div> 
                                <div className="col-sm-6 border-left">
                                        <div className="col-12 m-5"></div>
                                        <div className="col-12 m-2">   
                                                <div className="media text-muted pt-5">
                                                    <h5>All the latest news</h5>
                                                    {contents}
                                                </div>
                                        </div>
                                </div>
                        </div>);
            }        
    }

    componentWillUnmount(){
        if(this.source){
            this.source.cancel('Operation canceled by the user.');
        }
        this._isMounted = false;

        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
}