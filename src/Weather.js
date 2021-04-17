import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
  console.log("Weather ", props)
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log('weather--> handle response', response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
    })
  }

  function search() {
    console.log('weather-->search', city, apiKey)
    const apiKey = `09c4248a521300b214dab61c69efdff2`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl)
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    console.log('weather-->handleSubmit', event, city)
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    console.log('weather-->handleCityChange', event, city)
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    console.log('weater--> weatherData.ready')
    return (
      <div>
        <form onSubmit={handleSubmit} id="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">

              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <br />
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    console.log('weater--> weatherData.ready is false')
    search();
    return "Loading..."
  }
}
