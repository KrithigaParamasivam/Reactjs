import React from 'react';
import { Formik } from 'formik';
import{useFormik} from 'formik';
import * as yup from 'yup';

export default function MyValidation(){

    const schema=yup.object({
        firstname: yup.string().required("not valid please enter"),
        lastname: yup.string().required("notvalid"),
        email: yup.string().required("not valid"),

    })
    const{handleSubmit,handleChange,values,errors}= useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:''


        },
        schema,
        onSubmit(values){
            console.log("submitted");
            console.log(values);

        }
    })

    return(
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>FirstName</label>
          <input type="text" 
          name="firstname"
           onChange={handleChange}
            values={values.firstname}/>
            {errors.firstname? errors.firstname: null}
        </div>

        <div>
          <label>LastName</label>
          <input type="text" 
          name="lastname"
           onChange={handleChange}
            values={values.lastname}/>
            {errors.lastname? errors.lastname : null}
        </div>

        <div>

            <label>Email</label>
          <input type="text" 
          name="email"
           onChange={handleChange}
            values={values.email}/>
            {errors.email? errors.email : null}
        </div>
    
        <button type="submit"> submit</button>
        </form>
    </div>
    );
}
