import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="searchbox">
      <form>
        <input type="text" id="form-city" placeholder="Enter a city" />
        <button
          type="search"
          id="search"
          autofocus="off"
          autocomplete="off"
          className="fas fa-search"
        ></button>
        <button
          type="search"
          id="geol"
          autofocus="off"
          autocomplete="off"
          className="fas fa-map-marker-alt"
        ></button>
      </form>
    </div>
  );
}
