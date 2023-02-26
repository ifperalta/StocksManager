import React from "react";
import { FiEdit, FiFilePlus, FiXCircle, FiArrowRightCircle, FiTrash2 } from "react-icons/fi";
import axios from "axios";
import { Form, FloatingLabel, FormControl, Tabs, Tab } from 'react-bootstrap';
import ManageTickers from "./ManageTickers";
import AddTickers from "./AddTickers";


axios.interceptors.request.use(null, error =>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("Logging the error", error);
        console.log("An unexpected error occured");
    }
    return Promise.reject(error);
});


export default class CreatePortfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            portfolioID: '',
            portfolioname: '',
            portfolioDescription: '',
            portfoliolist: [],
            button: 'Save',
            loadnotification: false,
            portfoliomanagename: '',
            portfoliouid: 0,
            buttoncancel: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancelConfirm = this.handleCancelConfirm.bind(this);
        this.handleManage = this.handleManage.bind(this);
        this.handleSubmitCancel = this.handleSubmitCancel.bind(this);

        // this is experimental
        this.source = axios.CancelToken.source();
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    async handleSubmit(){
        let portfolio = {
            stk_ID: this.state.portfolioID,
            stk_portfolio_name: this.state.portfolioname,
            stk_portfolio_description: this.state.portfolioDescription
        }

        // input validation
        // create filter function
        if(this.state.button == 'Save'){ // save the portfolio
            try{
                await axios.post('http://localhost:8000/build-portfolio/' + this.props.token , portfolio);
            }catch(error){
                console.log('Error');
            }
            
        }else if(this.state.button == 'Update'){ // update the portfolio
            try{
                await axios.put('http://localhost:8000/update-portfolio/', portfolio);
            }catch(error){
                console.log('Error');
            }
        }
    
        this.componentDidMount(); // update the state

        // reset after submit
        this.setState({
            portfolioname: '',
            portfolioDescription: ''
        });
    }

    handleSubmitCancel(){
        this.setState({
            button: 'Save',
            portfolioID: '',
            portfolioname: '',
            portfolioDescription: '',
            buttoncancel: false
        });
    }

    handleEdit(stk_ID){
        let stock = this.state.portfoliolist.filter(data => data.stk_ID == stk_ID);
        this.setState({
            button: 'Update',
            portfolioID: stk_ID,
            portfolioname: stock[0].stk_portfolio_name,
            portfolioDescription: stock[0].stk_portfolio_description,
            buttoncancel: true
        });
    }

    handleConfirm(stockID, stockName){
        // load the confirmation 
        this.setState({ 
            loadnotification: true,
            portfolioID: stockID,
            portfoliomanagename: stockName
         });
    }

    handleCancelConfirm(){
        this.setState({ loadnotification: false });
    }

    handleDelete(){    
        // Create confirmation to delete
        try{
            axios.delete('http://localhost:8000/delete-portfolio/' + this.state.portfolioID);
            const newportfolio = this.state.portfoliolist.filter(p => p.stk_ID != this.state.portfolioID);
            this.setState({ portfoliolist: newportfolio, loadnotification: false });
        }catch(error){
            console.log('Error');
        }
    }

    handleManage(stk_uid){
        let stock = this.state.portfoliolist.filter(data => data.stk_uid == stk_uid);
        this.setState({
            portfoliouid: stk_uid, 
            portfoliomanagename: "Manage Portfolio: " + stock[0].stk_portfolio_name
        });
    }

    async componentDidMount(){
        try{
            const { data: portfolio } = await axios.get('http://localhost:8000/portfolio/' + this.props.token, { cancelToken: this.source.token });
            this.setState({ portfoliolist: portfolio});
        }catch(error){
            console.log('Error');
        }
    }    

    render(){
        // if notifcation is true then show the notification
        let notification = '';
        let btcancel = '';

        if(this.state.loadnotification){
            notification = (<div className="alert alert-warning alert-dismissible fade show w-600" role="alert">
                                <b>Delete {this.state.portfoliomanagename}?</b>
                                <button type="button" className="btn btn-dark btn-sm float-right" onClick={this.handleCancelConfirm}>Cancel</button>
                                <button type="button" className="btn btn-danger btn-sm bt-space-1 float-right" onClick={this.handleDelete}>Yes</button>
                            </div>);
        }

        if(this.state.buttoncancel){
            btcancel =  (<button type="button" className="mt-3 btn btn-danger btn-sm" onClick={this.handleSubmitCancel}>Cancel <FiXCircle /></button>); 
        }

        return(<div className="row"> 
                        <div className="col-sm-5 p-4">
                            <h2>Build</h2><br />
                            <div className="col-12">
                                <Form>
                                    <FloatingLabel controlId="floatingTextarea" label="Portfolio Name" className="mb-3">
                                        <FormControl as="textarea" placeholder="Portfolio Name" name="portfolioname" value={this.state.portfolioname} onChange={this.handleChange} />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                                        <FormControl
                                        as="textarea"
                                        placeholder="Description"
                                        name="portfolioDescription"
                                        value={this.state.portfolioDescription}
                                        onChange={this.handleChange}
                                        style={{ height: '85px' }}
                                        />
                                    </FloatingLabel>
                                    <button type="button" className="mt-3 btn btn-success btn-sm bt-space-1" onClick={this.handleSubmit}>{this.state.button} <FiArrowRightCircle /></button>
                                    {btcancel}
                                </Form>
                            </div>                                                        
                            <div className="col-12 m-4"></div> 
                            <div className="col-12">{notification}</div> 
                            <div className="col-12"> 
                                    <table className="table table-striped">
                                        <thead className="table-light">
                                            <tr>
                                                <th scope="col">Portolio Name</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.portfoliolist.map((data) => (
                                                <tr key={data.stk_ID}>
                                                    <td width="55%">
                                                        {data.stk_portfolio_name}
                                                    </td>
                                                    <td width="45%">
                                                       <button type="button" value={data.stk_ID} onClick={e => this.handleEdit(e.target.value)} className="bt-sm btn btn-warning btn-sm bt-space-1">Update <FiEdit /></button>
                                                       <button type="button" value={data.stk_uid} onClick={e => this.handleManage(e.target.value)} className="bt-sm btn btn-success btn-sm bt-space-1">Manage <FiFilePlus /></button>
                                                       <button type="button" value={data.stk_ID} onClick={e => this.handleConfirm(e.target.value, data.stk_portfolio_name)} className="bt-sm btn btn-danger btn-sm">Delete <FiTrash2 /></button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                            </div>
                        </div>

                        <div className="col-sm-7 p-4">
                                    <div className="col-12">
                                        <h2>{this.state.portfoliomanagename}</h2><br />         
                                        <Tabs defaultActiveKey="listsofstocks" id="uncontrolled-tab-example" className="mb-3 tab-title">
                                            <Tab eventKey="listsofstocks" title="Manage Portfolio">
                                                <ManageTickers portfolioID={this.state.portfoliouid} portfolioName={this.state.portfoliomanagename} />
                                            </Tab>
                                            <Tab eventKey="tickers" title="Add Tickers">
                                                <AddTickers portfolioID={this.state.portfoliouid} portfolioName={this.state.portfoliomanagename} />
                                            </Tab>
                                        </Tabs>
                                    </div>   
                        </div>    
                </div>);
    }

    
    componentWillUnmount(){
        if (this.source) {
            this.source.cancel("Unmounted Component");
        }
    }
}