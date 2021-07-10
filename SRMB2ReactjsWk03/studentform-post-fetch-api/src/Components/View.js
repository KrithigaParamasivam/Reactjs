import React,{useState} from 'react';


export default function View(){
    const[res,setResult]=useState([]);
    const handleOnClick=()=>{
        fetch("http://localhost:4002/student").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
        }).catch(e=>{
          console.error("ERR in Student...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })
    }

    return(
        <div>    
          <div classname="view">
          <input type="submit" onClick={handleOnClick} value="VIEW DETAILS"/>
          </div>
          
          <h4>STUDENT DETAILS</h4>
         <table border="2px"> <tr> </tr>           
           
             <tr><td><h4>FIRSTNAME</h4></td>
           <td><h4>LASTNAME</h4></td>
           <td><h4>EMAIL</h4></td>
           <td><h4>COURSE</h4></td>
           <td><h4>CITY</h4></td>
           <td><h4>Country</h4></td></tr>
              {res.map((x) => {
                return <tr>
                <td><label key={x.id}>{x.firstname}</label></td>
                <td><label key={x.id}>{x.lastname}</label></td>
                <td><label key={x.id}>{x.email}</label></td>
                <td><label key={x.id}>{x.course}</label></td>
                <td><label key={x.id}>{x.city}</label></td>
                <td><label key={x.id}>{x.country}</label></td>
                </tr>
              })}
            </table>
            </div>
            
        
    )
}