import dotenv from "dotenv";
import React, { useState } from "react";
dotenv.config();
import "./App.css";
import Weather from "./Weather";
import Background from "./Background";
import Bee from "./Bee";
import Butterflies from "./Butterflies";

export default function App() {
  const [selected, setSelected] = useState(false);
  const [daynight, setDayNight] = useState("sunset");
  function toggleSelected(selected) {
    selected = setSelected(!selected);
  }
  return (
    <div className="App">
      <Background day={daynight} />
      <div className="maincontainer">
        {" "}
        <Bee style={{ zOrder: "200" }} />
        <div className="cbody">
          <div className="card-body">
            {/* Search Form */}
            <Weather defaultCity="Monterrey" /> <Butterflies />
            {/*Geolocation Form*/}
            {/*
            <showPosition />
            */}
          </div>
        </div>
        <footer className="signature">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/maribel-alvarado/"
            target="_blank"
          >
            Aide Alvarado.
          </a>{" "}
          It is{" "}
          <a
            href="https://github.com/AideAlvarado/weather_react"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://practical-einstein-3cac52.netlify.app/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
