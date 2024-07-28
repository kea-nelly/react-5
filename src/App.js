import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/kea-nelly">Kealeboga Nelly Serapane </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kea-nelly/react-5"
            target="_blank"
            rel="noreferrer"
          >
            open- sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
