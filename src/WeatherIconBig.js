import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherIcon.css";

export default function WeatherIconBig(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  const conditions = {
    "01d": "sunny",
    "01n": "sunny",
    "02d": "cloudy",
    "02n": "cloudy",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rainy",
    "09n": "rainy",
    "10d": "rainy",
    "10n": "rainy",
    "11d": "rainy",
    "11n": "rainy",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "cloudy",
    "50n": "cloudy",
  };
  return <div className={conditions[props.code]} size={150}></div>;
}
