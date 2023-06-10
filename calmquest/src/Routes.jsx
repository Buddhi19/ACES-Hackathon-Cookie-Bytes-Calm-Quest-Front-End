import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "./components/RouteGuard"
 
//history
import { history } from './helpers/history';
import { IPhone11ProX1 } from "./components/IPhone11ProX1/IPhone11ProX1";
import Profile from "./components/camera/cam";
 
//pages

function Routes() {
   return (
       <Router history={history}>
           <Switch>
               <RouteGuard
                   exact
                   path="/"
                   component={IPhone11ProX1}
               />
               <Route
                   path="/cam"
                   component={Profile}
               />
               <Redirect to="/" />
           </Switch>
       </Router>
   );
}
 
export default Routes