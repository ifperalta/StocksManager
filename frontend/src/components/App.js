import axios from "axios";
import React from "react";

import Private from "./private";
import Public from "./public";
import Loading from "./common/Loading";

axios.interceptors.request.use(null, error =>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("Logging the error", error);
        console.log("An unexpected error occured");
    }
    return Promise.reject(error);
});

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
                       isAuth: "",
                       token : "",
                       userdata: {} 
                     };
        this.source = axios.CancelToken.source();
    }

    async componentDidMount(){
        try{
            let token = localStorage.getItem("token-auth");
            console.log(token);            
            if(token !== ""){
                await axios.get('http://localhost:8000/user-auth/' + token, { cancelToken: this.source.token })
                .then( res => { 
                        setTimeout(() => {
                            this.setState({
                                isAuth: res.data,
                                token: token
                            });
                        }, 200);
                });
            } else{
                this.state = { isAuth: false  };
            }   

        }catch(error){
            console.log(error.message);
        }
    }

    render(){
        if(this.state.isAuth === ""){
            return(<Loading />);

        }else if(this.state.isAuth){
            console.log("Private");
            return(<Private token={this.state.token} />);

        }else if(!this.state.isAuth){
            console.log("Public");
            return(<Public />);
        }
    }
    
}

export default App;