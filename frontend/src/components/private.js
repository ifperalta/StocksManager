import React from "react";
import { Route, Switch} from 'react-router-dom';

import Portfolio from "./portfolio/Portfolio";
import MyPortfolio from "./portfolio/MyPortfolio";
import Build from "./portfolio/Build";
import Reports from "./portfolio/Reports";
import Equity from "./portfolio/Equity";
import Scanner from "./scanner/Scanner";
import News from "./newsinsights/News";
import Pressrelease from "./newsinsights/Pressrelease";
import Dividends from "./research/Dividends";
import Earnings from "./research/Earnings";
import Stocks from "./research/Stocks";
import Account from "./account/Account";

import Home from "./home/Home";

import Signout from "./account/Signout";

import Login from "./landingpages/Login";

import LandingpagePrivate from "./landingpages/LandingpagePrivate";
import { Redirect } from "react-router-dom";

class Private extends React.Component{
    render(){        
            return(<div>
                    <Switch>
                        <Route exact path="/" component={LandingpagePrivate} />
                        <Route path="/stocksapp" component={Home}><Home token={this.props.token} /></Route>
                        <Route exact path="/portfolio" component={Portfolio}><Portfolio token={this.props.token} /></Route>
                        <Route exact path="/myportfolio" component={MyPortfolio}><MyPortfolio token={this.props.token} /></Route>
                        <Route exact path="/build" component={Build}><Build token={this.props.token} /></Route>
                        <Route exact path="/reports" component={Reports} />
                        <Route exact path="/lists" component={Equity} />
                        <Route exact path="/scanner" component={Scanner} />
                        <Route exact path="/news" component={News} />
                        <Route exact path="/pressrelease" component={Pressrelease} />
                        <Route exact path="/dividends" component={Dividends} />
                        <Route exact path="/earnings" component={Earnings} />
                        <Route exact path="/account" component={Account}><Account token={this.props.token} /></Route>
                        <Route exact path="/stocks" component={Stocks} />
                        <Route exact path="/signout" component={Signout} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/stocksapp" component={Home} />
                        <Redirect to="/stocksapp" />
                    </Switch>
                </div>);
    }    
}

export default Private;