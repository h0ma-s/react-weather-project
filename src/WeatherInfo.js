import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="Weather">
      <h1>
        <i className="fa-solid fa-map-pin"></i> {props.data.city}
      </h1>
      <div className="text-capitalize">{props.data.description}</div>
      <FormattedDate date={props.data.date} />
      <WeatherIcon code={props.data.icon} size={72} />
      <Temperature celsius={props.data.temp} />
      <div className="mt-3">
        {" "}
        Wind: {Math.round(props.data.wind)} km/h, Humidity:{" "}
        {Math.round(props.data.humidity)}%
      </div>
      <WeatherForecast coord={props.data.coords} />
    </div>
  );
}
