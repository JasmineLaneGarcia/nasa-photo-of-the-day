import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header"
import styled from "styled-components"
import ReactPlayer from 'react-player'

function App() {

  const [nasaData, setNasaData] = useState([])
  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=vYUZ1oidnthI0koSRKn4fCybcfTGGI3OL11GvbK1")
    .then(res => {
      console.log(res.data);
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
