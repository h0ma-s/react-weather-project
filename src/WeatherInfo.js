import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="Weather">
      <h1>{props.data.city}</h1>
      <div className="text-capitalize">{props.data.description}</div>
      <FormattedDate date={props.data.date} />
      <WeatherIcon code={props.data.icon} />
      <h2>{Math.round(props.data.temp)}°C</h2>
      <div className="mt-3">
        {" "}
        Wind: {Math.round(props.data.wind)} km/h, Humidity:{" "}
        {Math.round(props.data.humidity)}%
      </div>
    </div>
  );
}
