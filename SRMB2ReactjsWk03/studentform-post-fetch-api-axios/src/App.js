
import React,{useState} from 'react'
import UserRegistration from "./Components/UserRegistration.js"
import View from "./Components/View.js"
import MockData from "./Components/MockData.js"
import ComA from "./Components/ComA.js"
import ComB from "./Components/ComB.js"
import ComC from "./Components/ComC.js"

function App() {

  const handleUserAddition=(e)=>{
    console.log("Hi this a message from App.js");
    console.log(e); 
  }
  
  return (
    <div>
   <UserRegistration onUserAdd={handleUserAddition}/>
     <View/> 
     {/*<MockData/> */}
     {/* <StuLogin/>
     <ComA/>
     <ComB/>
     <ComC/>
     
     */} 
     
       
      
    </div>
  );
}

export default App;