import React from "react";
import { Form, FormControl, FormGroup } from 'react-bootstrap';
import axios from "axios";

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            isregistered: false
        }
        this.handleRegister = this.handleRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ 
            [name]: value
        });
    }

    
    async handleRegister(){
        let userdata = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password
        }

        try{
            await axios.post("http://localhost:8000/register", userdata);
            this.setState({ isregistered: true });
            setTimeout(() => {
                this.setState({ isregistered: false });
            }, 5000);

            // send email to user
        
        }catch(error){
            console.log('Error');
        }

        // reset the form values to empty
        this.setState({ fname: "", lname: "", email: "", password: "" });
    }

    render(){
        const todaysDate = new Date()
        const currentYear = todaysDate.getFullYear();

        return(<div className="flex-shrink-0">
                    <div className="navbar navbar-light bg-light static-top">
                        <div className="container">
                            <a className="navbar-brand" href="/">StockoH Manager</a>
                            <a className="btn btn-success" href="/login">Sign In</a>
                        </div>
                    </div>

                    <div className="subhead text-center">
                        <div className="container">
                        <div className="row">
                                <div className="col-md-4 mx-auto">
                                        <div className="form-row">
                                            <div className="col-12 formcontent">
                                                <h2>Create your StockoH account</h2><br />
                                                { this.state.isregistered ? <div className="alert alert-success" role="alert"> Registration Successful </div> : null }
                                            </div>
                                            <div className="col-12">
                                                    <Form className="col-sm-12">                                                        
                                                        <FormGroup className="mb-3">
                                                            <FormControl type="text" placeholder="First Name" name="fname" value={this.state.fname} onChange={this.handleChange} />
                                                        </FormGroup>
                                                        <FormGroup className="mb-3">
                                                            <FormControl type="text" placeholder="Last Name" name="lname" value={this.state.lname} onChange={this.handleChange} />
                                                        </FormGroup>
                                                        <FormGroup className="mb-3">
                                                            <FormControl type="text" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange} />
                                                        </FormGroup>
                                                        <FormGroup className="mb-5">
                                                            <FormControl type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                                        </FormGroup>
                                                        <button type="button" className="btn btn-success" onClick={this.handleRegister}>Register</button>
                                                    </Form>    
                                            </div>
                                            <div className="col-12 formcontent"></div>
                                            <div className="col-12 formcontent mt-3"></div>     
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