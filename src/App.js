import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="San Francisco" />

        <footer className="text-muted">
          Coded by Homa Sharifmousavi and{" "}
          <a
            href="https://github.com/h0ma-s/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
