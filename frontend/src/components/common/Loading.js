import React from "react";
import { Spinner } from "react-bootstrap";

export default class Loading extends React.Component{
    render(){
            return(<div className="flex-shrink-0">
                        <div className="container-fluid p-85">    
                                <div className="m-5"></div>
                                <div className="container">
                                    <div className="spinner">
                                        <p>Loading {this.props.pagename}...</p>
                                        <Spinner animation="border" variant="success" />
                                   </div>
                                </div> 
                        </div>
                    </div>);
        }
} 