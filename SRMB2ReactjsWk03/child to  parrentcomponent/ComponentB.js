import React,{useState,useEffect} from 'react'
import { MessageService } from './MessageService.js';


export default function ComponentB() {
    const[val,setVal]= useState({});

    useEffect(() =>{
        MessageService.getMessage().subscribe(x=>{
            setVal(x);                               
        });
    },[])

    return(
        <div>
            <h1> Details</h1>
            {val&& <div>{val.text.Studentname}</div>}
            
        </div>
    )

}