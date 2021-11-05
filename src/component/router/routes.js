import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

 import Nabar from "../navbar/navbar";
import Home from "../../screen/frontpage";
import Signup from "../form/signup";
import Signin from "../form/signin";
import Dashboard from "../dashboard/dashboard";

import AddDish from "../AddDish/AddDish";
import AllDish from "../AllDIsh/AllDish";
import Allorder from "../Orders/order";
import OrderList from "../OrderList/OrderList";



    

function ReactRouter() {
    return (
        <Router>
            <Nabar/>
            <Switch>
                <Route exact path='/'>
              <Home/>
                </Route>
                <Route  path='/Signup'>
                 <Signup/>
                </Route>
                <Route  path='/Signin'>
                <Signin/>
                </Route>
                <Route  path='/Dashboard'>
                <Dashboard/>
                </Route>
             
                <Route  path='/AddDish'>
                <AddDish/>
                </Route>
                <Route  path='/AllDish'>
                <AllDish/>
                </Route> 
                 <Route  path='/AllOrder'>
                <Allorder/>
                </Route>
                 <Route  path='/OrderList'>
                <OrderList/>
                </Route>
               
                
            </Switch>
        </Router>
    )
}

export default ReactRouter;