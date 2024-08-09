import React, {useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater, faWind } from '@fortawesome/free-solid-svg-icons'


function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  //const url ='https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}';


  return (
    <div className="App">
      <div className="container">
        <div className="input-container">
          <input class="search-input" id="searchInput" placeholder="Enter city name"/>
          <button class="search-button" id="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div className="weather-container">
          <div id="cityWeather" class="city-weather hidden">
            <img class="icon" id="icon" alt/>
            <h1 class="temperature" id="temperature"></h1>
            <h2 class="city" id="city"></h2>
            <div className="details">
              <div className="detail">
                <FontAwesomeIcon icon={faWater} />
                <div className="description">
                  <p class="value" id="humidity">%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="detail">
                <FontAwesomeIcon icon={faWind} />
                <div className="description">
                  <p class="value" id="wind">km/h</p>
                  <p>Wind</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
