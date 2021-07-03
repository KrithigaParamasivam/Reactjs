import logo from './logo.svg';
//import App from './App';
import React from 'react';
import './App.css';
import {Signup}   from './components/Signup.js';


function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          signup
          <Signup/>
        </div>
        <div className="col-md-7">
          </div>
      </div>
    </div>
  );
}

export default App;
