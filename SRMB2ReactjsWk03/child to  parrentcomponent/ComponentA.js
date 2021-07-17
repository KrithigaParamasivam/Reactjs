import React,{useState} from 'react'
import { MessageService } from './MessageService';

export default function ComponentA() {

  const[data,setdata]=useState({
  studentname:"",
  studentid:"",
  dept:"",
  });


    const handleOnChange=(e)=>{
     const{value,name}=e.target;
     setdata(prev=>{

          return {
             ...prev,
             [name]:value
             
          }

     })


    }
    const sendData=()=>{
        MessageService.sendMessage(data);
        console.log(data);
    }
    const resetData=()=>{
        MessageService.clearMessage();
    }
    return (

        <div className="api">
            <div className="app">
            <br></br>
            <h1 style={{color:"WindowFrame"}}>STUDENT DATA ENTRY</h1>
            <div>
            <h3>Student name</h3>
            <input type="text"name="studentname" placeholder="  enter your name  "value={data.studentname} onChange={handleOnChange}/>
            </div>
            <div>
            <h3>Student id</h3>
            <input type="text"name="studentid"placeholder="  enter your id  "value={data.studentid} onChange={handleOnChange}/>
            </div>
            <div>
            <h3>Department</h3>
            <input type="text"name="dept" placeholder="   enter your dept  "value={data.dept} onChange={handleOnChange}/>
            </div>
            <br></br>
            <button onClick={sendData}>send data</button>
            <br></br>
              
        <div>
            <br></br>
            {/* <button onClick={resetData}>clear Message</button> */}
        </div>
        </div>
        </div>
    )
}