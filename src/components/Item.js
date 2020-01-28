import React, { useState } from "react";
import Itempage from "../components/ItemPage";
import { Link } from "react-router-dom";

const Item = props => {
  const { name, color, id, text } = props;
  const [bgColor, setBgColor] = useState("");
  const [colorBool, setColorBool] = useState(false);
  const [itemId, setItemId] = useState();
  const [hiding, setHiding] = useState(false);

  const changeColor = () => {
    setColorBool(!colorBool);
    if (colorBool) {
      setBgColor(color);
    }
    if (colorBool === false) {
      setBgColor("");
    }
  };

  const [hide, setHide] = useState("none");

  const unhide = () => {
    if (hide === "none") {
      setHide("");
    }
    if (hide === "") {
      setHide("none");
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: bgColor }} onClick={() => changeColor()}>
        <h1>name: {name}</h1>
        <button onClick={() => unhide()}>Details</button>
        <div style={{ display: `${hide}` }}>
          <Itempage name={name} text={text} color={color}></Itempage>
        </div>
      </div>
    </div>
  );
};

export default Item;
