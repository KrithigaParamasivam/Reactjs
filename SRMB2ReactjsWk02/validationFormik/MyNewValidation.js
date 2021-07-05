import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';


export default function MyNewValidations() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


    const validationSchema = Yup.object({
        firstname : Yup.string().required("Firstname is mandatory"),
        lastname : Yup.string().required("lastname is mandatory"),
        email : Yup.string().email("INvalid Email").required("Pls Enter a Email"),
        age:Yup.number().typeError("Enter a valid age").min(18," Mini Age is 18").max(40,"Max age is 40"),
        gender:Yup.string().required("Gender is mandatory"),
        phonenumber : Yup.string().matches(phoneRegExp,"Phone number is invalid").min(10," phone number should minimum 10 numbers")
    }) 
    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            age:0,
            gender:0,
            email:'',
            phonenumber: '',
            course:0

        },
        validationSchema,
        onSubmit(values) {
            console.log("=============Submitted");
            console.log(values);
            alert("Form submitted sucessfully");
        }
    }) 

    return (
        <div>
            <h1> Sign up form</h1>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstname" onChange={handleChange} values={values.firstname}/>
                    {errors.firstname ? errors.firstname : null}
                </div>

                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastname" onChange={handleChange} values={values.lastname}/>
                    {errors.lastname ? errors.lastname : null}
                </div>

                <div>
                    <label>Age</label>
                    <input type="number" name="age" onChange={handleChange} values={values.age}/>
                    {errors.age ? errors.age : null}
                </div>

                
                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={handleChange} values={values.email}/>
                    {errors.email ? errors.email : null}
                </div>

                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phonenumber" onChange={handleChange} values={values.phonenumber}/>
                    {errors.phonenumber ? errors.phonenumber : null}
                </div>
                
                <div>
            <label>Gender :
              <input type="radio" name="picked" value="female" />
              Female
            </label>
            <label>
              <input type="radio" name="picked" value="male" />
              Male
            </label>
            <label>
              <input type="radio" name="picked" value="others" />
              Others
            </label>
            </div>

            <div>
            <label>Field :
              <input type="checkbox" name="checked" value="student" />
              Student
            </label>
            <label>
              <input type="checkbox" name="checked" value="working" />
              Working
            </label>
            <label>
              <input type="checkbox" name="checked" value="others" />
              Others
            </label>
            </div>

                <div>
                    <label>Agree</label>
                    <input type="checkbox" name="agree" onChange={handleChange} values={values.agree}/>
                    {errors.agree ? errors.check : null}
                </div>


                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}