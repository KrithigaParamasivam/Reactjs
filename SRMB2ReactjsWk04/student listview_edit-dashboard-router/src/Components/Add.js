import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
export default function Add(){
 
  const[values,setValues]=useState([]);
  const handleOnChange=(event)=>{
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
    console.log(values);
};

const handleOnClick=()=>{
  console.log("submitted");
  axios.post("http://localhost:4001/student",values).then(res => {
  console.log("saved");

  
}).catch(e=>{
  console.error("ERR in save data");
  console.error(e);
}).finally(()=>{
  console.log("I am in finally");
})

};

    return(
        <div>  
          <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>RECORDS</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-dark"> 
          

          <tr>
          <td><label>name</label>  </td>
          <td><input type="text" name="name" value={values.name} onChange={handleOnChange}/> </td>
          </tr>

          
          <tr>
          <td><label>Dob</label>  </td>
          <td><input type="text" name="dob" value={values.dob} onChange={handleOnChange}/> </td>
          </tr>

          <tr>
          <td><label>email</label>  </td>
          <td><input type="text" name="email" value={values.email} onChange={handleOnChange}/> </td>
          </tr>

          <tr>
          <td><label>city</label>  </td>
          <td><input type="text" name="city" value={values.city} onChange={handleOnChange}/> </td>
          </tr>

          <tr>
          <td><label>address</label>  </td>
          <td><input type="text" name="address" value={values.address} onChange={handleOnChange}/> </td>
          </tr>

          

          <tr>
           <input type="submit" onClick={handleOnClick}/>
          </tr>



          
         
            </table>
            </div>
            </div>
            </div>
            </div> 
          
        </div>
    )
}