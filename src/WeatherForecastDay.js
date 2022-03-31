import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function formatDate() {
    let date = new Date(props.data[0].dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  function max() {
    let maxTemp = Math.round(props.data[0].temp.max);
    return `${maxTemp}°`;
  }
  function min() {
    let minTemp = Math.round(props.data[0].temp.min);
    return `${minTemp}°`;
  }
  return (
    <div>
      <div className="forecast-day">{formatDate()} </div>
      <WeatherIcon code={props.data[0].weather[0].icon} size={42} />
      <div className="forecast-temperature">
        {" "}
        <span className="max">{max()}</span> /{" "}
        <span className="min">{min()}</span>{" "}
      </div>
    </div>
  );
}
