import React from 'react'
import Navibarcomp from './Components/Navibarcomp.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Contact from './Components/Contact.js'
import SignupForm from './Components/SignupForm.js'
import Signin from './Components/Signin.js'
import Dashboard from './Components/Dashboard.js'
import Admin from './Components/Admin.js'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useMediaQuery } from "@material-ui/core";

export default function App() {
  const rey=useMediaQuery("(max-width:400px)");
  const media=useMediaQuery("(max-width:1000px)");
  return (
    <div className="App">
    <Router>
     <Navibarcomp />
        {/* <Signup /> */}
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/about' exact component={About}/>
       <Route path='/contact' exact component={Contact}/>
       <Route path='/signup' exact component={SignupForm}/>
       <Route path='/signin' exact component={Signin}/>
       <Route path='/admin' exact component={Admin}/>
       <Route path='/logout' exact component={Home}/>
     
     </Switch>
   </Router>
   {rey && <div style={{backgroundColor:"grey",textAlign:"center"}}>Screen Switched to mobile version</div>}
   {rey && <div style={{backgroundColor:"black",textAlign:"center"}}>Screen Switched to mobile version</div>}
   </div>
   
  )
}
