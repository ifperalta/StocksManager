import React from "react";
import { FiMonitor, FiLayers } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default class LandingpagePrivate extends React.Component{

      render(){
                const todaysDate = new Date()
                const currentYear = todaysDate.getFullYear();

                return(<div className="full-container">
                            <div className="navbar navbar-light bg-light static-top">
                                <div className="container">
                                <a className="navbar-brand" href="/">StockoH Manager</a>
                                <a className="btn btn-success" href="/stocksapp">Go To App <BsFillArrowRightCircleFill /></a>
                                </div>
                            </div>

                            <div className="masthead text-white text-center">
                                <div className="container">
                                <div className="row">
                                    <div className="col-xl-9 mx-auto">
                                    <h1 className="mb-5 maintitle">Start building your portfolio</h1>
                                    </div>
                                    <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                        <a className="btn btn-success btn-lg" href="/stocksapp">GO TO APP <BsFillArrowRightCircleFill /></a>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="features-icons bg-light text-center">
                                <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                        <FiMonitor className="icon" />
                                        <h4>Easy To Use</h4>
                                        <p className="lead mb-0">Built your portfolio</p>
                                    </div>
                                    </div>
                                    <div className="col-lg-4">
                                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                        <FiLayers className="icon" />
                                        <h4>News and Insights</h4>
                                        <p className="lead mb-0">Stock market news and insights</p>
                                    </div>
                                    </div>
                                    <div className="col-lg-4">
                                    <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                        <IoIosCheckmarkCircleOutline className="icon" />
                                        <h4>Stocks Fundamental Data</h4>
                                        <p className="lead mb-0">Analyze current market trends</p>
                                    </div>
                                    </div>        
                                </div>
                                </div>
                            </div>

                            <div className="footer bg-light">
                                <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 h-100 text-center text-lg-right my-auto">          
                                    <p className="text-muted small mb-4 mb-lg-0"><b>Stock oH</b> - Easy to use stock management platform</p>
                                    <p className="text-muted small mb-4 mb-lg-0">&copy; {currentYear}. All Rights Reserved.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>);
    }
}