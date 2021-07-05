import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField.js';
import * as Yup from 'yup';

export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    phoneno: Yup.string()
      .min(10, 'MobileNo must contain 10 numbers  ')
      .max(10, 'Must be less than 10 Numbers')
      .required('Mobile Number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .max(8, 'Password must be at less than 8 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneno:'',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
        alert("Form submitted sucessfully");
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Mobile Number" name="phoneno" type="phoneno" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-dark mt-2" type="submit"  >Register</button>
            <button className="btn btn-dark mt-2"type="reset">Reset</button>
            
          </Form>
        </div>
      )}
    </Formik>
  )
}
