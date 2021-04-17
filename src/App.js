import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="maincontainer">
        <div className="cbody">
          <div className="card-body">
            {/* Search Form */}
            <Weather defaultCity="Monterrey" />
          </div>
        </div>
        <footer className="signature">
          This project was coded by{" "}
          <a href="#" target="_blank">
            Aide Alvarado
          </a>{" "}
          and is{" "}
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
