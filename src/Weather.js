import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      coords: response.data.coord,
      temp: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "e595356bb77e874bab1cb87dc84b6d45";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-sm mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a city"
          autoFocus="on"
          onChange={handleChange}
        />
        <button className="btn btn-outline-secondary" type="button">
          Search{" "}
        </button>
      </div>
    </form>
  );

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather">
        {form}
        <p>The app is loading...</p>
      </div>
    );
  }
}
