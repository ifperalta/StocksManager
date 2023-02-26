import React from "react";
import { Form, FormLabel, FormControl, FormGroup } from 'react-bootstrap';
import Loading from "../common/Loading";
import Header from "../common/Header";

export default class AppNotFound extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                isloaded: true
            };
            
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
                return(<Loading pagename="Account Settings" />);
            }    
            else{
                return(<div className="flex-shrink-0">
                                <Header />
                                <div className="container-fluid p-85">    
                                    <div className="m-5"></div>
                                    <div className="m-3">
                                        <div className="row"> 
                                                <div className="col-sm-5 m-5">                                                    
                                                    <h1>Page Not Found</h1>    
                                                </div> 
                                        </div>
                                    </div>
                                </div>
                    </div>);
            }
        }
}