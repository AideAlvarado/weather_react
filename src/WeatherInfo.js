import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherIconBig from "./WeatherIconBig";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>

      <div className="row mt-3">
        <div className="date col-4">
          <FormattedDate className="date" date={props.data.date} />

          <div className="float-left">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>

        {/* icon-col */}
        <div className="midcol col-4">
          <div className="weatherIcon">
            <WeatherIconBig code={props.data.icon} size={150} />
          </div>
        </div>
        {/* midcol col-6  */}
        {/* icon-col */}
        <div className="midcol col-4">
          <div className="h3">{"right now there "}</div>
          <span className="description">
            {props.data.description}
            <br></br>
          </span>
          <span>
            Humidity: <h2>{props.data.humidity}%</h2>
          </span>
          <span>
            Wind: <h2>{props.data.wind} km/h</h2>
          </span>
        </div>
        {/* midcol col-6  */}
      </div>
      {/** row mt-3 */}
      <div className="h3">
        <h3>Have a look for the next days</h3>
      </div>
    </div>
  );
}
