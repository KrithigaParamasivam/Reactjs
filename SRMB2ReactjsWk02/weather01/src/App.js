import React from "react";
import './App.css';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "f668e1797efc0285b0dd844f0f3497a0";

class App extends React.Component {
  state = {
    temperature: undefined,
    temp_min: undefined,
    temp_max: undefined,
    feels_like: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind: undefined,
    pressure: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind_speed: data.main.wind_speed,
        temp_min:data.main.temp_min,
        temp_max:data.main.temp_max,
        feels_like: data.main.feels_like,

        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        wind_speed: undefined,
        temp_min: undefined,
        temp_max: undefined,
        pressure: undefined,
        humidity: undefined,
        description: undefined,
        feels_like: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>         
                <div className="container">
                  <Titles />
                </div>
                <div className="abc">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    wind_speed={this.state.wind_speed}
                    temp_min={this.state.temp_min}
                    temp_max={this.state.temp_max}
                    feels_like={this.state.feels_like}
                    pressure={this.state.pressure}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  
               
                  />
                </div>
              </div>
            
          
       
     
    );
  }
};

export default App;

