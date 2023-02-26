import React from "react";
import { Nav, Navbar, NavLink } from 'react-bootstrap';

import Header from "../common/Header";
export default class Pressrelease extends React.Component{
    render(){
        return(<div className="flex-shrink-0">
                            <Header/>
                            <div className="container-fluid p-85">    
                                <div className="m-5"></div>
                                <div className="m-3 rounded bg-light rounded shadow-sm">
                                        <nav className="navbar navbar-expand-lg navbar-light">
                                        <div className="collapse navbar-collapse p-1" id="navbarNav">
                                                <Navbar.Collapse id="basic-navbar-nav">
                                                    <Nav className="me-auto">
                                                        <NavLink href="/news" className="sub-nav">Latest News</NavLink>
                                                        <NavLink href="/pressrelease" className="sub-nav">Press Release</NavLink>
                                                    </Nav>
                                                </Navbar.Collapse>
                                        </div>
                                        </nav>    
                                </div>    
                                <div className="m-4"></div>
                                <div className="m-3">
                                    <div className="row"> 
                                            <div className="col-sm-6 p-4">
                                                    <div className="col-11 m-2">
                                                        <h2><a href="#" className="atag">Latest Press Releases</a></h2><br />    
                                                        <div className="media text-muted pt-3">
                                                            <h6><a href="#">Tellus ac cursus commodo tortor mauris condimentum nibh</a></h6>
                                                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                                            </p>
                                                        </div>
                                                        <div className="media text-muted pt-3">
                                                            <h6><a href="#">Tellus ac cursus commodo tortor mauris condimentum nibh</a></h6>
                                                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                                            </p>
                                                        </div>
                                                        <div className="media text-muted pt-3">
                                                            <h6><a href="#">Tellus ac cursus commodo tortor mauris condimentum nibh</a></h6>
                                                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                                            </p>
                                                        </div>
                                                    </div>
                                            </div> 
                                            <div className="col-sm-6 border-left">
                                                    <div className="col-12 m-5"></div>
                                                    <div className="col-12">
                                                        <h3 className="border-bottom title-btm-10">Tellus ac cursus commodo tortor mauris condimentum nibh</h3> 
                                                        <div className="col-12 m-3"></div>
                                                        <div className="col-12  p-text">
                                                            <p>
                                                                Nam lobortis risus id arcu luctus tincidunt. Nulla viverra commodo iaculis. Aenean ex felis, mollis eu lacus ac, volutpat pharetra erat. Cras consectetur dui eget auctor vehicula. Suspendisse potenti. Phasellus ultrices purus ac posuere egestas. Morbi et hendrerit dolor. Sed ultricies orci dolor. Quisque urna ligula, pellentesque eu lobortis auctor, scelerisque id dolor. Proin a laoreet leo, sed tincidunt enim.
                                                            </p>
                                                            <p>
                                                                Nam vel accumsan ante. Donec cursus maximus ligula quis pulvinar. Duis ut interdum turpis, et venenatis orci. Nunc eget justo sollicitudin, malesuada quam in, dictum leo. Vivamus gravida diam sed placerat aliquet. Integer congue lectus non sem malesuada, vitae blandit sem porttitor. Duis imperdiet nulla quis dolor lobortis pharetra.
                                                            </p>
                                                            <p>
                                                                Curabitur ex nisi, viverra a neque id, ultrices fermentum turpis. Sed vehicula nulla sed porttitor pretium. Donec et ligula at ligula ornare commodo. Fusce cursus posuere commodo. Nullam interdum, erat quis volutpat interdum, massa massa condimentum urna, gravida pretium sem sapien blandit sapien. Aliquam posuere egestas euismod. Praesent viverra fermentum sem et aliquam.
                                                            </p>
                                                            <p> 
                                                                Nunc malesuada viverra varius. Aenean in nisi nisi. Mauris at ex tellus. Maecenas commodo dui ipsum, ac malesuada dui viverra commodo. Praesent ac congue nunc. In eros quam, faucibus vitae varius vel, pharetra sed est. Interdum et malesuada fames ac ante ipsum primis in faucibus. In pretium auctor nisi et vulputate. Aliquam erat volutpat. 
                                                            </p>
                                                        </div>
                                                            
                                                        <div className="col-12 m-5"></div>
                                                        <div className="col-12">
                                                            <a className="btn btn-sm btn-dark" href="#" role="button">Read Story</a>
                                                        </div>
                                                    </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                </div>);
    }
}