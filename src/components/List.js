import React, { useState } from "react";
import Item from "../components/Item";

const List = () => {
  const items = [
    {
      color: "red",
      name: "apple",
      id: 123,
      text: "Apples keep doctors away"
    },
    {
      color: "blue",
      name: "porsche",
      id: 456,
      text: "Unpopular opinion, porsches are overrated"
    },
    {
      color: "green",
      name: "yoda",
      id: "789",
      text: "Yoda is also overrated"
    }
  ];
  const [arr1, setArr1] = useState(items);

  return (
    <div className="List">
      {arr1.map((itms, idx) => {
        return (
          <Item
            key={idx}
            text={itms.text}
            name={itms.name}
            id={itms.id}
            color={itms.color}
          />
        );
      })}
    </div>
  );
};
export default List;
