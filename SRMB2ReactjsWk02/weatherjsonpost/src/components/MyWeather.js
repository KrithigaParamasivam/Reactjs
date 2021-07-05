import React,{useState,useEffect} from "react";

import DisplayWeather from "./DisplayWeather";
export default function MyWeather(props)

{
  const initialValues = {
    city: -1
  };
  const [weather,setWeather]=useState([]);
  const [submitted, setSubmitted] = useState(false);
 const [formValues, setFormValues] = useState(initialValues);
  const [cities,setCities] = useState([]);
  

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormValues((prev) => {
      return {
        ...prev,
        [name] : value,
      };
    });
    console.log(formValues);
  };
  const handleDoSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setSubmitted(true);
    const reqOptios = {
      method:"POST",
      headers : {
        "Content-Type":"application/json"   
      },
      body: JSON.stringify(formValues)
      
    };
    const name="http://localhost:4000/cities/"+formValues.city;
    console.log(name);

    fetch(name).then(res => res.json()).then(data=>{
      console.log("saved");
      console.log(data);  
      setWeather(
        {data:data});
      
    })

    
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

  },[])

  return (
    <div className="weather">
      <span className="title">WEATHER REPORT</span>
      <h1></h1>
    <div className="abc">

    <form onSubmit={handleDoSubmit} noValidate>
    <div >
      
          <label>City</label>
          <select name="city" onChange={handleOnChange} value={formValues.city}>
            <option value="-1">Please select a city</option>
            {cities.map((x) => {
              return <option key={x.id} value={x.id}>{x.name}</option>;
            })}
          </select>
          
          <button className="getweather" type="submit">Get Weather</button></div>
          
    
    </form>
    </div>
    
    {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
};