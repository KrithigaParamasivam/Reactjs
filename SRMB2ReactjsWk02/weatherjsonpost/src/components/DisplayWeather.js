import React from 'react';
export default function DisplayWeather(props){
    console.log(props);
    const { data } = props;
    return (
        <div className="displayweather">
          <h1>  {data.name}</h1>
          <h2>Temperature {"  "} 
          {Math.floor(data.temp - 273.15)}
          </h2>
          <h3>Humidity {data.humidity}</h3>
          <h4>Temp_Min {data.temp_min}</h4>
          <h4>Temp_Max {data.temp_max}</h4>
          <h5>Pressure {data.pressure}</h5>
          <h6>Wind Speed {data.wind_speed}</h6>
          <h7>Condition {data.clouds}</h7>
          </div>
    );

}