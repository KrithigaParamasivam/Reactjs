import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import Router1 from './Components/Router1'
import Router2 from './Components/Router2';
import MockData from './Components/MockData';
import View from './Components/View';
import UserRegistration from './Components/UserRegistration';

export default function App() {
  return (
    <div>
      <Router>
        <li> <Link to="/router1">Router1</Link></li>
        <li> <Link to="/router2">Router2</Link></li>
        <li> <Link to="/mockdata">MockData</Link></li>
        <li> <Link to="/userregistration">UserRegistration</Link></li>
        <li> <Link to="/view">View</Link></li>
        <Switch>
        <Route path="/router1" exact component={Router1}></Route>
        <Route path="/router2" exact component={Router2}></Route>
        <Route path="/mockdata" exact component={MockData}></Route>
        <Route path="/userregistration" exact component={UserRegistration}></Route>
        <Route path="/view" exact component={View}></Route>

        </Switch>
      </Router>
    </div>
  )
}
