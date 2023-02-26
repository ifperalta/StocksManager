import React from "react";

export default class Login extends React.Component{
    render(){
        const todaysDate = new Date()
        const currentYear = todaysDate.getFullYear();
        
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
                                            <h1>Sorry page not found</h1>
                                            <a href="/login">Sign In</a> <br />
                                            <a href="/register">Register Now</a>
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