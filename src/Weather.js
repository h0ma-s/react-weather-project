import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temp: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="input-group input-group-sm mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a city"
              autoFocus="on"
            />
            <button className="btn btn-outline-secondary" type="button">
              Search{" "}
            </button>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="text-capitalize">{weatherData.description}</div>
        <FormattedDate date={weatherData.date} />
        <img src="/media/02d.png" alt="Partly cloudy" />
        <h2>{Math.round(weatherData.temp)}°C</h2>
        <div className="mt-3">
          {" "}
          Wind: {Math.round(weatherData.wind)} km/h, Humidity:{" "}
          {Math.round(weatherData.humidity)}%
        </div>
      </div>
    );
  } else {
    const apiKey = "e595356bb77e874bab1cb87dc84b6d45";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="Weather">
        <form>
          <div className="input-group input-group-sm mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a city"
              autoFocus="on"
            />
            <button className="btn btn-outline-secondary" type="button">
              Search{" "}
            </button>
          </div>
        </form>
        <p>The app is loading...</p>
      </div>
    );
  }
}
