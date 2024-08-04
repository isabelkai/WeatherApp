import React, {useState} from 'react';
import axios from 'axios';
require('dotenv').config();


function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  //const url ='https://api.openweathermap.org/data/2.5/weather?lat=34.098907&lon=-118.327759&appid=${apiKey}';


  return (
    <div className="App">
      <h1>Weather App</h1>
    </div>
  );
}

export default App;
