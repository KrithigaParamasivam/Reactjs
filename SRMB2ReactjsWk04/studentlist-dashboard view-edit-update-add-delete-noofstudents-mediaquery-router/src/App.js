import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import View from './Components/View';
import Home from'./Components/Home';
import Navbarcomp from './Components/Navbarcomp';
import Edit from './Components/Edit'
import Add from './Components/Add'
import EditUser from './Components/EditUser'
import Dashboard from './Components/Dashboard'
import { useMediaQuery } from "@material-ui/core";


function App() {
  const rey=useMediaQuery("(max-width:400px)");
  const media=useMediaQuery("(max-width:1000px)");
  return (
    <div className="App">
     <Router>
      <Navbarcomp />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/view' exact component={View} />
        <Route path='/edit' exact component={Edit} />
        <Route path='/add' exact component={Add} />
        <Route path='/edit/edituser/:id' component={EditUser} />
        <Route path='/dashboard' exact component={Dashboard} />

        
      </Switch>
    </Router>
    {rey && <div style={{backgroundColor:"grey",textAlign:"center"}}>Screen Switched to mobile version</div>}
    </div>
  );
}

export default App;