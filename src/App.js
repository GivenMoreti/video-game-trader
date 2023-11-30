import React,{ useState } from "react";


import './styles.css';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {

  const [name, setName] = useState("Given");

  const date = new Date();
  const hours = date.getHours();

  return (
    <div className="App">
      <Header />
      <Main />
        <h1> {(hours > 12) ? "Good Afternoon" : "Good morning"} {name}</h1>
      <Card />
      <Card />
      
      <Footer />

    </div>
  );
}

export default App;
