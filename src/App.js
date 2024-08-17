import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater, faWind, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  //const url ='https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}';


  return (
    <div className="app">
      {/* <div className="container">
        <div className="top">
          <div className="input-container">
            <input class="search-input" id="searchInput" placeholder="Enter location"/>
            <button class="search-button" id="searchButton">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div> */}
      <div className="weather-container">
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="temperature">
            <h1>25°C</h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>25°C</p>
          </div>
          <div className="humidity">
            <FontAwesomeIcon icon={faWater} />
            <p>20%</p>
          </div>
          <div className="wind">
            <FontAwesomeIcon icon={faWind} />
            <p>5km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
