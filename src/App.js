import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState("Given");
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const date = new Date();
      const hours = date.getHours();

      if (hours >= 12) {
        setTimeOfDay("Good Afternoon");
      } else if (hours >= 18) {
        setTimeOfDay("Good Evening");
      } else if (hours >= 20) {
        setTimeOfDay("Good Night");
      } else {
        setTimeOfDay("Good Morning");
      }
    };

    // Call the function immediately to set the initial greeting
    updateGreeting();

    // Set up a timer to update the greeting every minute (adjust as needed)
    const timerId = setInterval(updateGreeting, 60000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timerId);
  }, []); // Empty dependency array to run the effect only once when the component mounts

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
