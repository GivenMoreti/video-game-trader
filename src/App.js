import React, { useState } from "react";

import "./styles.css";

import Header from "./components/Header";
import Main from "./components/Main";   //has card information
import Footer from "./components/Footer";


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
    <div className="app-content">
      <Header />

      <h1 className="timeOfDay">
        {timeOfDay} {name}
      </h1>
      <Main />

      <Footer />
    </div>
  );
}

export default App;
