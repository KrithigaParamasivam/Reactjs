import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import View from './Components/View';
import Home from'./Components/Home';
import Navbarcomp from './Components/Navbarcomp';
import Edit from './Components/Edit'
import Add from './Components/Add'
import EditUser from './Components/EditUser'


function App() {
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
        
      </Switch>
    </Router>
    </div>
  );
}

export default App;