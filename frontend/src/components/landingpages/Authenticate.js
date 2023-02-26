import axios from "axios";
import React from "react";

import Loading from "../common/Loading";
import { Redirect } from "react-router-dom";

axios.interceptors.request.use(null, error =>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("Logging the error", error);
        console.log("An unexpected error occured");
    }
    return Promise.reject(error);
});

class Authenticate extends React.Component{

    constructor(props){
        super(props);
        this.state = { isAuth: "" };
        this.source = axios.CancelToken.source();
    }

    async componentDidMount(){
        try{
            await axios.get('http://localhost:8000/user-auth/' + localStorage.getItem("token-auth"), { cancelToken: this.source.token })
            .then( res => { 
                    setTimeout(() => {
                        this.setState({
                            isAuth: res.data
                        });
                    }, 1000);
            });
        }catch(error){
            console.log(error.message);
        }
    }

    render(){
        if(this.state.isAuth === ""){
            return(<Loading pagename="Dashboard" />);

        }else if(this.state.isAuth){
            return(<Redirect to="/app" />);

        }else if(!this.state.isAuth){
            return(<Redirect to="/login" />);
        }
    }

    componentWillUnmount(){
        if (this.source) {
            this.source.cancel("Unmounted Component");
        }
        this._isMounted = false;
    }
    
}

export default Authenticate;