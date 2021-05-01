import React, { useState } from "react";
import "./Sun.css";

export default function Sun(props) {
  const [top, setTop] = useState(props.top);
  const [right, setRight] = useState(props.right);
  const [opacity, setOpacity] = useState(props.opacity);
  return <div className="sun-moon"></div>;
}
