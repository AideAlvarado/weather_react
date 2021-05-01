import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faMapMarker,
  faCircle,
  faCircleNotch,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./Weather.css";
import Loading from "./Loading";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const marker = <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" inverse />;
  const searchIcon = <FontAwesomeIcon icon={faSearch} size="lg" inverse />;
  console.log("Weather ----->", process.env);
  function ShowPosition(position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    let key = process.env.REACT_APP_OPENWEATHER_KEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(ShowPosition);
  }
  function handleResponse(response) {
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
    });
  }

  function search() {
    const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit} className="search-form">
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="input"
                onChange={handleCityChange}
              />
            </div>
            <div className="submitbuttons">
              <span className="botonSearch" onClick={search}>
                {searchIcon}
              </span>
              <span className="botonSearch" onClick={getCurrentPosition}>
                {marker}
              </span>
            </div>
          </div>
        </form>
        <br />
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
