import React, { useState } from "react";
import Card from "./Card";
import data from "./data";

export default function Main() {

  const [selectCategory, setSelectCategory] = useState('All');

  const handleChangeCategory = (event) => {
    setSelectCategory(event.target.value);
  };

  const filteredVideos = selectCategory === "All" ? data :
    data.filter(item => item.category === selectCategory);



  const cardData = filteredVideos.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}   //this single line replaces the code below
      // img={item.img}
      // title={item.title}
      // description={item.description}
      // quantity={item.quantity}
      // seller={item.seller}
      // available = {item.available}
      //category = {item.category}
      />
    );
  });

  return (
    <div className="main-content">
      <div className="main-texts">
        <h1 className="main-heading">Trade Your Old Disks</h1>
        <p className="main-text">Done Playing? Trade or Sell Now!</p>



      </div>

      <div className="filters">
        <select id="category" value={selectCategory} onChange={handleChangeCategory}>
          <option></option>
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Horror">Horror</option>

        </select>

      </div>

      <div className="Cards">{cardData}</div>
    </div>
  );
}
