import React from "react";
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            login: false,
            authenticate: true,
            isloading: false,
            userID: ""
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ 
            [name]: value
        });
    }

    async handleLogin(){
        let logindata = {
            email: this.state.email,
            password: this.state.password
        }
        try{
            await axios.post("http://localhost:8000/login/", logindata)
            .then( res => {
                    setTimeout(() => {
                        if(res.data.length > 0){
                            localStorage.setItem("token-auth", res.data); 
                            this.setState({
                                login: true,
                            });    
                        }else{
                            this.setState({
                                authenticate: false,
                            });    
                        }
                    }, 300);
            });        
            
        }catch(error){
            console.log(error);
        }
        // reset the form values to empty
        this.setState({ email: "", password: "" });
    }

    render(){
        const todaysDate = new Date()
        const currentYear = todaysDate.getFullYear();  
        if(this.state.login){
            return(<Redirect to="/app" />);
            
        }else{
            return(<div className="flex-shrink-0">
                            <div className="navbar navbar-light bg-light static-top">
                                <div className="container">
                                    <a className="navbar-brand" href="/">StockoH Manager</a>
                                    <a className="btn btn-success" href="/register">Join Now</a>
                                </div>
                            </div>

                            <div className="subhead text-center">
                                <div className="container">
                                    <div className="row">
                                            <div className="col-md-4 mx-auto">
                                                    <div className="form-row">
                                                        <div className="col-12 formcontent">
                                                            <h2>Sign In</h2>
                                                            <p>Manage your stocks portfolio</p>
                                                            { this.state.authenticate ? null : <div className="alert alert-warning" role="alert"> Login Failed </div> }
                                                        </div>
                                                        <div className="col-12">
                                                                <Form className="col-sm-12">                                                        
                                                                    <FormGroup className="mb-3">
                                                                        <FormControl type="text" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange}/>
                                                                    </FormGroup>
                                                                    <FormGroup className="mb-5">
                                                                        <FormControl type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                                                    </FormGroup>
                                                                    <button type="button" className="btn btn-success" onClick={this.handleLogin}>Sign In</button>
                                                                </Form>    
                                                        </div>
                                                        <div className="col-12 formcontent"></div>
                                                        <div className="col-12 formcontent mt-3"></div>                                            
                                                        <div className="col-12 formcontent"><br />
                                                            <a href="/resetpassword">Forgot your password?</a>
                                                        </div>
                                                    </div>
                                            </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer bg-light">
                                <div className="container">
                                    <div className="row">                           
                                        <div className="col-lg-12 h-100 text-center text-lg-right my-auto">                            
                                            <p className="text-muted small mb-4 mb-lg-0"><b>StockOH</b> - Easy to use stock management platform</p>
                                            <p className="text-muted small mb-4 mb-lg-0">&copy; {currentYear}. All Rights Reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>);    
        }            


    }    
}