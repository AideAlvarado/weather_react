import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  console.log("weatherForecastDays", props);
  function maxTemperature() {
    console.log("weatherForecastDay-->maxTemperature", props);
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }

  function minTemperature() {
    console.log("weatherForecastDay-->minTemperature", props);
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C | `;
  }

  function day() {
    console.log("weatherForecastDay-->day", props);
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <hr />
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecase-temperature">
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <hr />
      </div>
    </div>
  );
}
