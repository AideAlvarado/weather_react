import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  let weatherData = {
    city: "Monterrey",
    temperature: 45,
    date: "Sunday Funday 00:00",
    description: "sunny",
    humidity: 30,
    wind: 50,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  };
  return (
    <div className="WeatherInfo">
      <div class="destinationcity">
        <h1 id="destinationcity">{weatherData.city}</h1>

        <h1 className="weatherdate" id="weatherdate">
          {weatherData.date}
        </h1>
      </div>
      <h1 className="temp" id="temp">
        {weatherData.temperature}
      </h1>
      <span className="celsius" id="degreesC" aria-label="°Celsius">
        °C
      </span>
      <span className="pipe" id="degrees">
        {" "}
        |{" "}
      </span>
      <span className="fahrenheit" id="degreesF" aria-label="°fahrenheit">
        °F
      </span>
      <div className="mid-col" id="mid-col">
        
      </div>
      <div className="mid-col" id="midcol">
        <h2 id="Description">{weatherData.description}</h2>
        <h2 id="infoHum">Humidity {weatherData.humidity}%</h2>
        <h2 id="infoWin">Wind {weatherData.wind}kmh</h2>
      </div>
      <div className="row">
        <h3> next hours: </h3>
      </div>

      <div className="row" id="forecast">
        <div class="col3"> Day1</div>
        <div class="col3"> Day2</div>
        <div class="col3"> Day3</div>
        <div class="col3"> Day4</div>
        <div class="col3"> Day5</div>
      </div>
    </div>
  );
}
