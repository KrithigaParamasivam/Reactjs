import React,{useState,useEffect} from 'react'
import { MessageService } from './MessageService.js';


export default function ComponentC() {

    const[data,setdata]=useState();


    useEffect(()=>{
        MessageService.getMessage().subscribe(x=>{
            setdata(x);
            console.log(x);

        });

    },)
    return (
        <div>
           
            <table border="10px" className="ap">
            
            <tr>
          <td>  <h2> Studentname</h2> </td>
           <td><h2>Studentid</h2> </td> 
          <td> <h2> Department</h2></td>
           </tr>
                 
                
                <tr>
          <td>  <h1> {data && <div>{data.Text.studentname}</div>}</h1> </td>
           <td><h1>{data && <div>{data.Text.studentid}</div>}</h1> </td> 
          <td> <h1> {data && <div>{data.Text.dept}</div>}</h1></td>
           </tr>
            </table>

             

            
        </div>
    )
}