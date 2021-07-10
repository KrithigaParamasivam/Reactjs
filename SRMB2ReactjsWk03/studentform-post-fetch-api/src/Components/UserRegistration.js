import React,{useState,useEffect} from "react";
import ErrorMessage from "./ErrorMessage";
import "./UserRegistration.css";


export default function UserRegistration(props) {
  const initialValues = {
    username:"",
    firstname:"",
    lastname:"",
    email: "",
    city: -1,
    course: -1,
    country:-1,
    gender:false,
    designation: false,
    agree:false
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [cities,setCities] = useState([]);
  const [country,setCountry] = useState([]);
  const [course,setCourse] = useState([]);
  const [res,setRes] = useState([]);


  {/*const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Thirunelveli" },
    { id: 3, name: "Tanjore" },
    { id: 4, name: "Madurai" },
  ];*/}

  {/*const courses = [
    { id: 1, name: "Mca" },
    { id: 2, name: "Bca" },
    { id: 3, name: "Cs" },
    { id: 4, name: "BE" },
  ];*/}


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

    if (!values.email) {
      errors.email = "please enter the email id";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    
    if (values.username==false) {
      errors.username = "invalid username";
    }

    if (values.firstname==false) {
      errors.firstname = "invalid firstname";
    }

    if (values.lastname==false) {
      errors.lastname = "invalid lastname";
    }


    if (values.city < 0) {
      errors.city = "Please Select a city";
    }

    if (values.course < 0) {
      errors.city = "Please Select a course";
    }
    
    if (values.country < 0) {
      errors.city = "Please Select a country";
    }

    if (values.gender ==false) {
      errors.gender = "Please select the gender";
    }

    if (values.intext == false) {
      errors.intext = "Please select the option";
    }
    return errors;
  };  
  
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
      <h1 >STUDENT REGISTRATION FORM</h1>
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
     

        <div className="d2">
          <label>FirstName</label>
          <input
            value={formValues.firstname}
            name="firstname"
            type="firstname"
            id="firstname"
            onChange={handleOnChange}
          />
          <ErrorMessage message={formErrors.firstname} />
        </div>

        <div className="d3">
          <label>LastName</label>
          <input
            value={formValues.lastname}
            name="lastname"
            type="lastname"
            id="lastname"
            onChange={handleOnChange}
          />
          <ErrorMessage message={formErrors.lastname} />
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

        <div className="d5">
          <label>CityName</label>
          <select name="city" onChange={handleOnChange} value={formValues.city}>
            <option value="-1">Please select a city</option>
            {cities.map((x) => {
              return <option key={x.id} value={x.name}>{x.name}</option>;
            })}
          </select>
          <div>
            <ErrorMessage message={formErrors.city} />
          </div>
        </div>
        
        
        <div className="d6">
          <label>Courses</label>
          <select name="course" onChange={handleOnChange} value={formValues.course}>
            <option value="-1">Please select a course</option>
            {course.map((x) => {
              return <option key={x.id} value={x.name}>{x.name}</option>;
            })}
          </select>
          <div>
            <ErrorMessage message={formErrors.course} />
          </div>
        </div>

        <div className="d7">
          <label>Country</label>
          <select name="country" onChange={handleOnChange} value={formValues.country}>
            <option value="-1">Please select a country</option>
            {country.map((x) => {
              return <option key={x.id} value={x.name}>{x.name}</option>;
            })}
          </select>
          <div>
            <ErrorMessage message={formErrors.country} />
          </div>
        </div>

        <div className="d8">
          <label>Gender</label>
          <input type="radio" name="gender" value={formValues.gender} onChange={handleOnChange}  />
          Female
          <input type="radio" name="gender" onChange={handleOnChange} />
          Male
          <div>
            <ErrorMessage message={formErrors.gender} />
          </div>
        </div>

        <div className="d9">
          <label>Designation</label>
          <input type="checkbox" name="designation" onChange={handleOnChange} />
          student
          <input type="checkbox" name="designation" onChange={handleOnChange} />
          working
          <input type="checkbox" name="designation" onChange={handleOnChange} />
          others
          <div>
            <ErrorMessage message={formErrors.designation} />
          </div>
        </div>

        <div className="d10">
          <label>Agree</label>
          <input type="checkbox" name="agree" onChange={handleOnChange} />
          <div>
            <ErrorMessage message={formErrors.agree} />
          </div>
        </div>

         <div className="d11">
          <button type="submit">Submit</button>
        </div>
             
         
      </form>
    </div>
    
  );
}
