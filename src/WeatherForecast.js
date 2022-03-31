import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    const apiKey = "e595356bb77e874bab1cb87dc84b6d45";

    let apiForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;
    axios.get(apiForecastUrl).then(handleResponse);
    return null;
  }
}
