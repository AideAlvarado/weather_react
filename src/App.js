import "./App.css";
import Search from "./Search";

import WeatherInfo from "./WeatherInfo";

export default function App() {
  return (
    <div className="App">
      <div className="maincontainer">
        <div className="cbody">
          <div className="card-body">
            {/* Search Form */}
            <Search />
            <div className="midrow">
              {/* WeatherInfo Form */}
              <WeatherInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
