import React from "react";
import { Form, FormControl, FormGroup } from 'react-bootstrap';

export default class ResetPassword extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        
    }
    render(){
        const todaysDate = new Date()
        const currentYear = todaysDate.getFullYear();

        return(<div className="flex-shrink-0">
                    <div className="navbar navbar-light bg-light static-top">
                        <div className="container">
                            <a className="navbar-brand" href="/">StockoH Manager</a>
                            <a className="btn btn-success" href="/login">Join Now</a>
                        </div>
                    </div>

                    <div className="subhead text-center">
                        <div className="container">
                        <div className="row">
                                <div className="col-md-4 mx-auto">
                                        <div className="form-row">
                                            <div className="col-12 formcontent mb-3">
                                                <h2>Please type your email address below.</h2>
                                                <p>You will receive an email with instructions to reset your password. </p>
                                            </div>
                                            <div className="col-12">
                                                    <Form className="col-sm-12">                                                        
                                                        <FormGroup className="mb-3">
                                                            <FormControl type="text" placeholder="Email Address"/>
                                                        </FormGroup>
                                                        <button type="button" className="btn btn-success">Submit</button>
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