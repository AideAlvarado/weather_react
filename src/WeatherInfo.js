import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  console.log("WeatherInfo --> props", props, props.data.ready);
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>

      <span>
        <FormattedDate className="date" id="date" date={props.data.date} />
      </span>
      <span className="text-capitalize">{props.data.description}</span>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-6">
          <span>Humidity: {props.data.humidity}%</span>
          <span>Wind: {props.data.wind} km/h</span>
        </div>
      </div>
    </div>
  );
}
