import logo from './logo.svg';
import './App.css';
import UserRegistration from './Components/UserRegistration';
import MyValidation  from './Components/MyValidation.js';
import login  from './Login.js';
import MyNewValidation from './Components/MyNewValidation.js';



function App() {
  const handleUserAddition = (e) =>{
    console.log("I am from App.js");
    console.log(e);
  }

  return (
    
    <div className="App">
        <UserRegistration/>      
    </div>
  );
}

export default App;


