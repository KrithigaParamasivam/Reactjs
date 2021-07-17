import React,{useState,useEffect} from "react";
export default function MockData() {

  const [result,setResult]=useState([])
  useEffect(()=>{
    console.log("Executed after render method=======");
    fetch("http://localhost:4005/studentdetails").then(res => res.json()).then(data=>{
      console.log(data);
      setResult(data); 
    })
  },[])
  
  return (
    <div>
      {result.map((x) => {
             // return <h1>{x.first_name}{x.last_name}{x.email}</h1>
            })}
           <table border="2px"> <tr> </tr>           
           <input type="text" placeholder="Search..."/> 
          <tr>
          <td><h4>ID</h4></td>
          <td><h4>FIRSTNAME</h4></td>
           <td><h4>LASTNAME</h4></td>
           <td><h4>EMAIL</h4></td>
           <td><h4>GENDER</h4></td> 
           <td><h4>Country</h4></td></tr>
              {result.map((x) => {
                return <tr>
                 <td><label key={x.id}>{x.id}</label></td>
                <td><label key={x.id}>{x.first_name}</label></td>
                <td><label key={x.id}>{x.last_name}</label></td>
                <td><label key={x.id}>{x.email}</label></td>
                <td><label key={x.id}>{x.gender}</label></td>
                <td><label key={x.id}>{x.country}</label></td>
                </tr>
                })}
                </table>
     
    </div>
  )
}
