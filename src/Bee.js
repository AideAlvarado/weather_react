import React, { useState } from "react";
import "./Bee.css";
export default function Bee(props) {
  const [top, setTop] = useState(props.top);
  return <div className="bee"></div>;
}
