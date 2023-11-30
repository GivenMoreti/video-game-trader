import React from "react";
import Card from "./Card";

export default function Main() {
  return (
    <div className="main-content">
      <div className="main-texts">
        <h1 className="main-heading">Trade Your Old Disks</h1>
        <p className="main-text">Done Playing? Trade or Sell Now!</p>
      </div>

      <div className="Cards">
        <Card
          img="./images/twitch.png"
          title="my first disk"
          description="grand theft auto 5"
          quantity={4}
          seller = "Dennis"
        />
        <Card
          img="./images/ocean-bottom-logo.png"
          title="my second disk"
          description="Grand theft auto 6"
          quantity={2}
          seller = "Dan"
        />
        <Card
          img="./images/lastofus.jpg"
          title="The last of us 2"
          description="Mint"
          quantity={2}
          seller = "Alex"
        />
         <Card
          img="./images/ocean-bottom-logo.png"
          title="my second disk"
          description="Grand theft auto 6"
          quantity={2}
          seller = "Dan"
        />
        <Card
          img="./images/twitch.png"
          title="The last of us 2"
          description="Mint"
          quantity={2}
          seller = "Alex"
        />
         <Card
          img="./images/lastofus.jpg"
          title="my second disk"
          description="Grand theft auto 6"
          quantity={2}
          seller = "Dan"
        />
        <Card
          img="./images/twitch.png"
          title="The last of us 2"
          description="Mint"
          quantity={2}
          seller = "Alex"
        />
         <Card
          img="./images/ocean-bottom-logo.png"
          title="my second disk"
          description="Grand theft auto 6"
          quantity={2}
          seller = "Dan"
        />
        <Card
          img="./images/gtav.jpg"
          title="The last of us 2"
          description="Mint"
          quantity={2}
          seller = "Alex"
        />
         <Card
          img="./images/ocean-bottom-logo.png"
          title="my second disk"
          description="Grand theft auto 6"
          quantity={2}
          seller = "Dan"
        />
        <Card
          img="./images/twitch.png"
          title="The last of us 2"
          description="Mint"
          quantity={2}
          seller = "Alex"
        />
      </div>
    </div>
  );
}
