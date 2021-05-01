import React, { useState } from "react";
import "./Cloud.css";

export default function Cloud(props) {
  const [top, setTop] = useState(props.top);
  const [right, setRight] = useState(props.right);
  const [opacity, setOpacity] = useState(props.opacity);
  return (
    <div
      className="cloud"
      style={{ top: top, right: right, opacity: opacity }}
    ></div>
  );
}
