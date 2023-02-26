import React from "react";
import axios from "axios";
import { Form, FormLabel, FormControl, FormGroup } from 'react-bootstrap';
import Loading from "../common/Loading";
import Header from "../common/Header";

axios.interceptors.request.use(null, error =>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("Logging the error", error);
        console.log("An unexpected error occured");
    }
    return Promise.reject(error);
});

export default class Account extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                isloaded: true,
                userdata: {},
                fname: "",
                lname: "",
                displayname: "",
                useremail: "",
                userphone: "",
                username: "",
                password: ""
            };
            this.handleChange = this.handleChange.bind(this);
            this.source = axios.CancelToken.source();
        }

        handleChange(event){
            const value = event.target.value;
            const name = event.target.name;
            this.setState({
                [name]: value
            });
        }    

        async componentDidMount(){
                    try{
                        let token = this.props.token;
                        if(token !== ""){
                            await axios.get('http://localhost:8000/userdata/' + token, { cancelToken: this.source.token })
                            .then( res => { 
                                    setTimeout(() => {
                                        this.setState({
                                            userdata: res.data[0],
                                            isloaded: false
                                        });
                                    }, 200);
                            });
                        }    
            
                    }catch(error){
                        console.log(error.message);
                    }
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
                                                    <Form className="col-sm-12">
                                                        <h5 className="border-bottom pd-btm-10 mb-4">Personal Information</h5>
                                                        <FormGroup className="mb-3">
                                                            <FormLabel className="formlabel">First Name</FormLabel>
                                                            <FormControl  name="fname" type="text" value={this.state.userdata.stk_user_fname} onChange={this.handleChange}/>
                                                        </FormGroup>
                                                        <FormGroup className="mb-3">
                                                            <FormLabel className="formlabel">Last Name</FormLabel>
                                                            <FormControl name="lname" type="text" value={this.state.userdata.stk_user_lname} onChange={this.handleChange}/>
                                                        </FormGroup>
                                                        <FormGroup className="mb-3">
                                                            <FormLabel className="formlabel">Display Name</FormLabel>
                                                            <FormControl name="displayname" type="text" value={this.state.userdata.stk_user_display_name}  onChange={this.handleChange}/>
                                                        </FormGroup>
                                                        <FormGroup className="mb-3">
                                                            <FormLabel className="formlabel">Email Address</FormLabel>
                                                            <FormControl name="useremail" type="text" value={this.state.userdata.stk_user_email} onChange={this.handleChange}/>
                                                        </FormGroup>
                                                        <FormGroup className="mb-5">
                                                            <FormLabel className="formlabel">Phone Number</FormLabel>
                                                            <FormControl  name="userphone" type="text" value={this.state.userdata.stk_user_phone} onChange={this.handleChange}/>
                                                        </FormGroup>
                                                        <h4 className="border-bottom pd-btm-10 mb-4">User Information</h4>
                                                        <FormGroup className="mb-3">
                                                            <FormLabel className="formlabel">Username</FormLabel>
                                                            <FormControl  name="username" type="text" value={this.state.userdata.stk_user_email} onChange={this.handleChange}/>
                                                        </FormGroup>
                                                        <FormGroup className="mb-5">
                                                            <FormLabel className="formlabel">Password</FormLabel>
                                                            <FormControl  name="password" type="text" onChange={this.handleChange}/>
                                                        </FormGroup>
                                                        <button type="button" className="btn btn-success btn-sm">Save Account Information</button>
                                                    </Form>    
                                                </div> 
                                        </div>
                                    </div>
                                </div>
                    </div>);
            }
        }
}