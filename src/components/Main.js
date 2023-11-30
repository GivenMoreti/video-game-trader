import React from "react";
import Card from "./Card";
import data from "./data";

export default function Main() {
  const cardData = data.map((item) => {
    return (
      <Card
        img={item.img}
        title={item.title}
        description={item.description}
        quantity={item.quantity}
        seller={item.seller}
      />
    );
  });

  return (
    <div className="main-content">
      <div className="main-texts">
        <h1 className="main-heading">Trade Your Old Disks</h1>
        <p className="main-text">Done Playing? Trade or Sell Now!</p>
      </div>

      <div className="Cards">{cardData}</div>
    </div>
  );
}
