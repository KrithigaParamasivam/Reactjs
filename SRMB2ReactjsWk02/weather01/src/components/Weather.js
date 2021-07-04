import React from "react";

const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.temp_min && <p className="weather__key"> Temp Min: 
	 		<span className="weather__value"> { props.temp_min } </span>
	 	</p> 
	 }
	 { 	
	 	props.temp_max && <p className="weather__key"> Temp Max: 
	 		<span className="weather__value"> { props.temp_min } </span>
	 	</p> 
	 }
	 { 	
	 	props.feels_like && <p className="weather__key"> Feels Like: 
	 		<span className="weather__value"> { props.feels_like } </span>
	 	</p> 
	 }
	 { 	
	 	props.pressure && <p className="weather__key"> Pressure: 
	 		<span className="weather__value"> { props.pressure } </span>
	 	</p> 
	 }
	 { 	
	 	props.wind_speed && <p className="weather__key"> Wind Speed: 
	 		<span className="weather__value"> { props.wind_speed } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;