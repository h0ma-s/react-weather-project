import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <h2 className="mt-3">
      {Math.round(props.celsius)} <span className="units ">°C</span>
    </h2>
  );
}
