import React from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

axios.interceptors.request.use(null, error =>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("Logging the error", error);
        console.log("An unexpected error occured");
    }
    return Promise.reject(error);
});


export default class LoadNews extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newslist: []
        }
        this._isMounted = false; 
        this.source = axios.CancelToken.source();
    }
    
    async componentDidMount(){
        this.setState({
            newslist: this.props.allNewsData
        });
    }

    render(){ 
            return(<div className="row">
                        <div className="col-8 m-2">
                            {this.state.newslist.map((news, i) => (
                                <div className="media text-muted pt-3 m-2" key={i}>
                                    <div className="row">
                                        <div className="col-3">
                                            <img src={news.image} className="mr-2 rounded" alt={news.title} width="100" height="75" />
                                        </div>
                                        <div className="col-9">
                                            <p><a href={news.url}  rel="noreferrer" target="_blank">{news.headline}</a></p>
                                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                                <i>Source: {news.source}</i>
                                            </p>
                                        </div>
                                    </div>    
                                </div>
                            ))}
                        </div>
                </div> );
    }

    componentWillUnmount(){
        if(this.source){
            this.source.cancel('Operation canceled by the user.');
        }
        this._isMounted = false;
    }
}