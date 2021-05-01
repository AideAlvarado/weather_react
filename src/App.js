import dotenv from "dotenv";
dotenv.config();
import "./App.css";
import Weather from "./Weather";
import Cloud from "./Cloud";
import Sun from "./Sun";
import Background from "./Background";
import Bee from "./Bee";
export default function App() {
  return (
    <div className="App">
      <Background />
      <div className="maincontainer">
        {" "}
        <Bee style={{ zOrder: "200" }} />
        <div className="cbody">
          <div className="card-body">
            {/* Search Form */}
            <Weather defaultCity="Monterrey" />
            {/*Geolocation Form*/}
            <showPosition />
          </div>
        </div>
        <footer className="signature">
          This project was coded by{" "}
          <a href="#" target="_blank">
            Aide Alvarado.
          </a>{" "}
          It is{" "}
          <a href="https://" target="_blank">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
