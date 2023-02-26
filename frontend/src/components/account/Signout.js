import axios from "axios";
import React from "react";

axios.interceptors.request.use(null, error =>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("Logging the error", error);
        console.log("An unexpected error occured");
    }
    return Promise.reject(error);
});

class Signout extends React.Component{
    constructor(props){
        super(props);
        this.source = axios.CancelToken.source();
    }

    async componentDidMount(){
        try{
            await axios.put('http://localhost:8000/signout/' + localStorage.getItem("token-auth"), { cancelToken: this.source.token });
            localStorage.removeItem("token-auth");
            localStorage.clear();
            this.props.history.push("/login");
        }catch(error){
            console.log(error.message);
        }
    }

    render(){
        return null;
    }

    componentWillUnmount(){
        if (this.source) {
            this.source.cancel("Unmounted Component");
        }
        this._isMounted = false;
    }
    
}

export default Signout;