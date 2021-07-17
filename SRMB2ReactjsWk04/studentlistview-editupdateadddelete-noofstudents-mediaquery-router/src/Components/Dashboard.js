
import React,{useState,useEffect} from 'react';

export default function Dashboard() {

    const[res,setResult]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4001/student").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
        }).catch(e=>{
          console.error("ERR in Student...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })

    },[])
    
    

    return (
        <div>
           <h1>No of Students:{res.length}</h1> 
        </div>
    )

    }