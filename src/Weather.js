import React from "react";
import "./Weather.css";
export default function Weather() {
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
      <h1>San Francisco</h1>
      <div>Partly cloudy</div>
      <div>Saturday 06:00</div>
      <img src="/media/02d.png" alt="Partly cloudy" />
      <h2>9°C</h2>
      <div className="mt-3"> Wind: 6 km/h, Humidity: 85%</div>
    </div>
  );
}
