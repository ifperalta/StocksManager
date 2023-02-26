import React from "react";
import { Nav, NavLink, Navbar, Form, InputGroup, Button, FormControl } from 'react-bootstrap';
import axios from "axios";
import Loading from "../common/Loading";
import LoadNews from "./LoadNews";


import Header from "../common/Header";

axios.interceptors.request.use(null, error =>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("Logging the error", error);
        console.log("An unexpected error occured");
    }
    return Promise.reject(error);
});


export default class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newslist: [],
            isloaded: true    
        }
        this._isMounted = false; // this is experimental
        this.source = axios.CancelToken.source();
    }

    async componentDidMount(){
        setTimeout(() => {
            this.setState({
                isloaded: false
            });
        }, 1000);
    }
    
    render(){
        if(this.state.isloaded){
            return(<Loading pagename="Latest News" />);
        }

        else{
                return(<div className="flex-shrink-0">
                                    <Header />
                                    <div className="container-fluid p-85">    
                                        <div className="m-5"></div>
                                        <div className="m-3">
                                            <LoadNews />    
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
    }
}