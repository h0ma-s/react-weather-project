import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  let fahrenheit = (props.celsius * 9) / 5 + 32;
  if (unit === "celsius") {
    return (
      <h2>
        {Math.round(props.celsius)}{" "}
        <span className="units">
          <span className="current">°C</span> |{" "}
          <button onClick={displayFahrenheit}>°F</button>
        </span>
      </h2>
    );
  } else {
    return (
      <h2>
        {Math.round(fahrenheit)}{" "}
        <span className="units">
          <button onClick={displayCelsius}>°C</button> |{" "}
          <span className="current">°F</span>
        </span>
      </h2>
    );
  }
}
