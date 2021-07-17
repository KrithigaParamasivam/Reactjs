import React,{useState,useEffect} from "react";
import ErrorMessage from "./ErrorMessage";
import "./UserRegistration.css";


export default function UserRegistration(props) {
  const initialValues = {
    username:"",
    emailid:"",
    password:"",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [cities,setCities] = useState([]);
  const [country,setCountry] = useState([]);
  const [course,setCourse] = useState([]);
  const [res,setRes] = useState([]);



  const handleDoSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    console.log(formValues);
    console.log("Submitted");
    console.log("===" + Object.entries(formErrors).length)
    setSubmitted(true);
    

    
    const reqOptios = {
      method:"POST",
      headers : {
        "Content-Type":"application/json"   
      },
      body: JSON.stringify(formValues)
    };
    fetch("http://localhost:4002/student",reqOptios).then(res => res.json()).then(data=>{
      console.log("saved");
      console.log(data.id);
      
    }).catch(e=>{
      console.error("ERR in save data");
      console.error(e);
    }).finally(()=>{
      console.log("I am in finally");
    })

  };

  
  const handleOnChange = (event) => {
    const designation = event.target.type === "checkbox";
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: designation ? event.target.checked : value,
      };
    });

    console.log(formValues);
  };
   


  const validate = (values) => {
    let errors = {};
    console.log(values);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const pass = "^(?=.*[0-9])"
    + "(?=.*[a-z])(?=.*[A-Z])"
    + "(?=.*[@#$%^&+=])"
    + "(?=\\S+$).{8,20}$";

    if (!values.email) {
      errors.email = "please enter the email id";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
        errors.password = "please enter the password";
      } else if (!regex.test(values.email)) {
        errors.password = "Invalid password";
      }

    if (values.username==false) {
      errors.username = "invalid username";
    }
}

  
  useEffect(()=>{
    console.log("Executed after render method=======");
    fetch("http://localhost:4000/cities").then(res => res.json()).then(data=>{
      console.log(data);
      setCities(data);
    }).catch(e=>{
      console.error("ERR in CITIES...");
      console.error(e);
    }).finally(()=>{
      console.log("I am in finally");
    })

    fetch("http://localhost:4000/country").then(res => res.json()).then(data=>{
      console.log(data);
      setCountry(data);
    }).catch(e=>{
      console.error("ERR in Country...");
      console.error(e);
    }).finally(()=>{
      console.log("I am in finally");
    })


    fetch("http://localhost:4000/course").then(res => res.json()).then(data=>{
      console.log(data);
      setCourse(data);
    }).catch(e=>{
      console.error("ERR in COURSE...");
      console.error(e);
    }).finally(()=>{
      console.log("I am in finally");
    })
    console.log("===============")
  },[])
 
  
  return (
   <div>
     <div className="heading">
      <h1>LOGIN FORM</h1>
      </div>
      <h2 className="h2">
      {(Object.entries(formErrors).length==0) && submitted && <div> Form  Submitted Sucessfully </div>}
      </h2>
      <form onSubmit={handleDoSubmit} noValidate>
      <div className="d1">
          <label>UserName</label>
          <input
            value={formValues.username}
            name="username"
            type="username"
            id="username"
            onChange={handleOnChange}
          />
          <ErrorMessage message={formErrors.username} />
        </div>
     

        <div className="d4">
          <label>Email ID</label>
          <input
            value={formValues.email}
            name="email"
            type="email"
            id="email"
            onChange={handleOnChange}
          />
          <ErrorMessage message={formErrors.email} />
        </div>

        

         <div className="d11">
          <button type="submit">Submit</button>
        </div>
             
         
      </form>
    </div>
    
  );
}