import React,{useState,useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
export default function EditUser(){
    const [cities,setCities] = useState([]);
    
        let history = useHistory();
        const { id } = useParams();
        const [user, setUser] = useState({
          name: "",
          dob: "",
          email: "",
          city: ""
         
        });
      
        const { name, dob, email, city} = user;
        const onInputChange = e => {
          setUser({ ...user, [e.target.name]: e.target.value });
        };
      
        useEffect(() => {
            fetch("http://localhost:4000/cities").then(res => res.json()).then(data=>{
          console.log(data);
          setCities(data);
        }).catch(e=>{
          console.error("error in city values");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })
          loadUser();
        }, []);
      
        const onSubmit = async e => {
          e.preventDefault();
          await axios.put(`http://localhost:4001/student/${id}`, user);
          history.push("/");
          alert("Updated....");
        };
      
        const loadUser = async () => {
          const result = await axios.get(`http://localhost:4001/student/${id}`);
          setUser(result.data);
        };
    
    return(
        <div className="container">
        <title>Student Registeration</title>
       <form onSubmit={e => onSubmit(e)}> 
       <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>RECORDS</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-dark">
      
      <tr><td><label>Name</label></td>
     <td><input type="text" name="name" value={name} onChange={e => onInputChange(e)}/></td> 
      </tr>
      <tr >
      <td><label>Date of Birth</label></td>
     <td> <input type="text" name="dob" value={dob} onChange={e => onInputChange(e)}/></td>
     </tr>
      <tr >
      <td><label>Email Id</label></td>
      <td>
      <input type="text" name="email" value={email} onChange={e => onInputChange(e)}/>
      </td>
      </tr>
        <tr>
          <td><label>Country</label></td>
            <td>
            <select name="city" onChange={e => onInputChange(e)} value={city}>
              <option value="-1">Please select a country</option>
              {cities.map((x) => {
                return <option key={x.id} value={x.name} name={x.name}>{x.name}</option>;
              })}
            </select>
            </td>
            </tr>
            <tr>
            <button className="btn btn-primary">Update User</button>
           </tr> 
           </table>
          </div></div></div></div>
            </form>
            </div>
    )
}