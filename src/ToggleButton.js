import PropTypes from "prop-types";
import React, { Component, useState } from "react";

import "./ToggleButton.css";

export default function ToggleButton(props) {
  const [selected, setSelected] = useState(props.selected);
  function toggleSelected() {
    setSelected(!selected);
    console.log("togglebutton-->Toggleselected", selected);
  }
  console.log("ToggleButton", props);
  return (
    <div className="toggle-container" onClick={toggleSelected}>
      <div className={`dialog-button ${selected ? "" : "disabled"}`}>
        {selected ? "Nigth" : "Day"}
      </div>
    </div>
  );
}
