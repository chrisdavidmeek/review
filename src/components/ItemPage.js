import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const Itempage = props => {
  const { name, text, id, color } = props;

  return (
    <div>
      <button></button>
      <h1>Name: {name}</h1>
      <p>Text: {text}</p>
      <h3 style={{ backgroundColor: color }}>Color: {color}</h3>
    </div>
  );
};

export default Itempage;
