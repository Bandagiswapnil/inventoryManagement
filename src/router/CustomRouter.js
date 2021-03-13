import React from 'react';
import Login from '../components/LogIn'
import Challan from '../components/Challan'
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import {PrivateRoute} from './PrivateRoute';
import {Report} from '../components/Report';
import{SpareDetails} from '../components/SpareDetails';
import {Spares} from '../components/Spares';
import{StandardDataInput} from '../components/StandardDataInput';
export const  CustomRouter=()=>{
    let isAuth=false;
    return(
    
<div>
{/* <BrowserRouter >
      <Switch>
<Route path='/' exact component={Login} />
<Route path='/login' component={Login} />
<PrivateRoute authed={isAuth} path='/challan' component={Challan} />
</Switch>
</BrowserRouter> */}
<BrowserRouter>
{!isAuth ? (
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect to="/login" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact component={Report} />
          <Route path="/challan" component={Challan} />
          <Route path="/report" component={Report} />
          <Route path="/spareDetails" component={SpareDetails} />
          <Route path="/spares" component={Spares} />
          <Route path="/standardDataInput" component={StandardDataInput} />
          <Redirect to="/" />
        </Switch>
      )}
</BrowserRouter>
</div>
    );
}