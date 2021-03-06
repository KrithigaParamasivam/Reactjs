import React,{useState,useEffect} from 'react';
export default function View(){
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
    
    return(
        <div>
          <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>RECORDS</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-light"> 
                <thead>
                    <tr className="table-dark">
                    <th scope="col">Student Id</th> 
                    <th scope="col">Student Name</th> 
                    <th scope="col">Email Id</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                    </tr>
                </thead>
                <tbody>
              {res.map((x) => {
                return <tr >
                 <td ><label key={x.id}>{x.id}</label></td>
                <td ><label key={x.id}>{x.name}</label></td>
                <td ><label key={x.id}>{x.email}</label></td>
                <td ><label key={x.id}>{x.address}</label></td>
                <td ><label key={x.id}>{x.city}</label></td>
                </tr>
              })}
              
              </tbody>
            </table>
            
            </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}