import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater, faWind, faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = process.env.REACT_APP_API_KEY;


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      setLocation('');
    }
  }


  return (
    <div className="app"> 
      <div className="weather-container">
        <div className="top">
          <div className="search">
            <input 
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter location'
            type="text"/>
          </div>
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
          <div className="detail">
            <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
            <p className="value">25°C</p>
            <p>Feels like</p>
          </div>
          <div className="detail">
            <FontAwesomeIcon icon={faWater} />
            <p className="value">20%</p>
            <p>Humidity</p>
          </div>
          <div className="detail">
            <FontAwesomeIcon icon={faWind} />
            <p className="value">5km/h</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
