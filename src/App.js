import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header"


function App() {

  const [nasaData, setNasaData] = useState([])
  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => {
      setNasaData(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])


  return (
    <div className="App">
      <Header img = {nasaData}/>
    </div>
  );
}

export default App;
