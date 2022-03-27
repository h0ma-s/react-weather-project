import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      temp: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    setLoaded(true);
  }

  const [weatherData, setWeatherData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const apiKey = "e595356bb77e874bab1cb87dc84b6d45";
  let city = "San Francisco";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`;

  if (loaded === true) {
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
        <div>{weatherData.description}</div>
        <div>Saturday 06:00</div>
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
