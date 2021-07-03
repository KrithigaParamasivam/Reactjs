import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import "./UserRegistration.css";

export default function UserRegistration(props) {
  const initialValues = {
    username:"",
    firstname:"",
    email: "",
    city: -1,
    course: -1,
    gender:false,
    intext: false,
  };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Thirunelveli" },
    { id: 3, name: "Tanjore" },
    { id: 4, name: "Madurai" },
  ];

  const courses = [
    { id: 1, name: "Mca" },
    { id: 2, name: "Bca" },
    { id: 3, name: "Cs" },
    { id: 4, name: "BE" },
  ];

  const handleDoSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));

    console.log(formValues);
    console.log("Submitted");


    console.log("===" + Object.entries(formErrors).length)

    setSubmitted(true);
    if (Object.entries(formErrors).length == 0) {
      setSubmitted(true);
    } else setSubmitted(false);

   // props.onUserAdd(formValues);
  };

  const handleOnChange = (event) => {
    //const isInternalExternal = event.target.type === "checkbox";
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
      errors.email = "Cannot be blank";
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

    if (values.gender == false) {
      errors.gender = "Please select the option";
    }



    if (values.intext == false) {
      errors.intext = "Please select the option";
    }

    return errors;
  };

  return (
    <div>
      <label>SIGNUP FORM</label>
      {(Object.entries(formErrors).length==0) && submitted && <div> Form  Submitted Sucessfully </div>}
      <form onSubmit={handleDoSubmit} noValidate>
        <div>
          <label>username</label>
          <input
            value={formValues.username}
            name="username"
            type="username"
            id="username"
            onChange={handleOnChange}
          />
          <ErrorMessage message={formErrors.username} />
        </div>

        <div>
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

        <div>
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


        <div>
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

        <div>
          <label>City</label>
          <select name="city" onChange={handleOnChange} value={formValues.city}>
            <option value="-1">Please select a city</option>
            {cities.map((x) => {
              return <option value={x.id}>{x.name}</option>;
            })}
          </select>
          <div>
            <ErrorMessage message={formErrors.city} />
          </div>
        </div>

        <div>
          <label>Courses</label>
          <select name="course" onChange={handleOnChange} value={formValues.course}>
            <option value="-1">Please select a course</option>
            {courses.map((x) => {
              return <option value={x.id}>{x.name}</option>;
            })}
          </select>
          <div>
            <ErrorMessage message={formErrors.course} />
          </div>
        </div>

        <div>
          <label>Gender</label>
          <input type="radio" name="intext" onChange={handleOnChange}  />
          Female
          <input type="radio" name="intext" onChange={handleOnChange} />
          Male
          <div>
            <ErrorMessage message={formErrors.gender} />
          </div>
        </div>

        <div>
          <label>Designation</label>
          <input type="checkbox" name="intext" onChange={handleOnChange} />
          student
          <input type="checkbox" name="intext" onChange={handleOnChange} />
          working
          <input type="checkbox" name="intext" onChange={handleOnChange} />
          others
          <div>
            <ErrorMessage message={formErrors.intext} />
          </div>
        </div>

        <div>
          <label>Agree</label>
          <input type="checkbox" name="intext" onChange={handleOnChange} />
          <div>
            <ErrorMessage message={formErrors.intext} />
          </div>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
