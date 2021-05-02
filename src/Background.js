import React, { useState } from "react";
import "./Background.css";
import Cloud from "./Cloud";
import Sun from "./Sun";

export default function Backgroud(props) {
  const [top, setTop] = useState(props.top);
  const [right, setRight] = useState(props.right);
  const [opacity, setOpacity] = useState(props.opacity);
  const [selected, setSelected] = useState(false);
  const [day, setDay] = useState(props.day);
  return (
    <div className={`sky country-side ${day}`} style={{ zIndex: "-1" }}>
      <div className="sky">
        <Sun />
        <Cloud top="170px" right="50px" opacity="0.8" />
        <Cloud top="300px" right="300px" opacity="0.5" />
        <Cloud top="120px" right="500px" opacity="0.5" />
        <Cloud top="5px" right="500px" opacity="0.4" />
        <div className="rainbow"></div>
      </div>
      <div className="hills"></div>
    </div>
  );
}
