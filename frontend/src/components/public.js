import React from "react";
import { Route, Switch} from 'react-router-dom';

// Client Facing Pages
import Landingpage from "./landingpages/Landingpage";
import Login from "./landingpages/Login";
import Register from "./landingpages/Register";
import ResetPassword from "./landingpages/ResetPassword";
import Authenticate from "./landingpages/Authenticate";
import LandingpagePrivate from "./landingpages/LandingpagePrivate";

import { Redirect } from "react-router-dom";

class Public extends React.Component{
    render(){
            return(
                <div>
                    <Switch>
                        
                        <Route exact path="/" component={Landingpage} />
                        <Route exact path="/app" component={LandingpagePrivate}  />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/app" component={Authenticate} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/resetpassword" component={ResetPassword} />
                        <Route exact path="/stocksapp" component={Landingpage} />
                        <Route exact path="/" component={Landingpage} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            );
    }
    
}

export default Public;