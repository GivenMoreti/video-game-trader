import React, { useState } from "react";

import "./styles.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("Given");

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  if (hours > 12) {
    timeOfDay = "Good Afternoon";
  } else if (hours > 18) {
    timeOfDay = "Good Evening";
  } else if (hours > 20) {
    timeOfDay = "Good Night";
  } else {
    timeOfDay = "Good Morning";
  }

  return (
    <div className="App">
      <Header />
      <Main />
      <h1>
        {" "}
        {timeOfDay} {name}
      </h1>
      <Card img="./images/twitch.png"
        title="my first disk"
        description="gta 5"
      />
      <Card img="./images/ocean-bottom-logo.png"
        title="my second disk"
        description="gta 6"
      />

      <Footer />
    </div>
  );
}

export default App;
