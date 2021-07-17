//import React from 'react'
import "./sign.css"
import React,{useState,useEffect} from "react";
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";

export default function SignupForm() {
    const history = useHistory();
    const initialValues = {
        email:'',
        password:'',
    };
    const[values,setValues]=useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
       
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        setErrors(validate(values))
        console.log(values);
        console.log("Submitted");
        console.log("===" + Object.entries(errors).length)
        setSubmitted(true);
        // swal({
        //    // title: "Good job!",
        //     text: "login sucess!",
        //     icon: "success",
        //   });
        // // alert("LogIn success");

        
    console.log("===" + Object.entries(errors).length)

    setSubmitted(true);
    if (Object.entries(errors).length == 0) {
      setSubmitted(true);
    } else setSubmitted(false);

   // props.onUserAdd(formValues);
  
        };

    const handleOnChange=(event)=>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const validate = (values) => {
        let errors = {};
        console.log(values);
    
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            // const reg= ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,9})
            // const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if (!values.email) {
          errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
          errors.email = "invalid EmailId";
        }

        if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length <5){
            errors.password="min 6 characters required for password"
          }

            // if (!values.password) {
            //     errors.password = "Password is required";
            // } else if (!strongRegex.test(values.password)){
            //     errors.password="required atleast one lowercase,uppercase,specialcharacter,min-6,max-20";
            // } 
    
        return errors;
      };  

    return (

        <div className="container">
            
             
            <div className="app-wrapper">
            {(Object.entries(errors).length==0) && submitted && <div className="success"> Login success </div>}
            <div>
            <h2 className="title">User Login</h2>
            </div>
           
            <form onSubmit={handleFormSubmit} noValidate  className="form-wrapper">
            
                <div className="email">
                    <label className="label">Email id</label>
                    <input className="input" type="email" name="email" value={values.email} onChange={handleOnChange}/>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" type="password" name="password" value={values.password} onChange={handleOnChange}/>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div >
               {/* <button className="submit" onClick={handleFormSubmit}>*/}
                      <button className="submit" onClick={() => history.push("/view")}> Login </button>
                        {/* <button className="submit" > Login </button>  */}
                      {/* <button  className="btn btn-dark "onClick={() => history.push("/")}>Back</button>
                     */}
                </div>
            </form>
            </div>    


        </div>
        
    )
}
