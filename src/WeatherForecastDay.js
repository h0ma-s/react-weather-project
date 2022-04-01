import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function formatDate() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  function max() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }
  function min() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }
  return (
    <div>
      <div className="forecast-day">{formatDate()} </div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="forecast-temperature">
        {" "}
        <div className="max">{max()}</div>
        <div className="min text-muted">{min()}</div>
      </div>
    </div>
  );
}
