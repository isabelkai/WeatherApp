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
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
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
            <p>{data.name}</p>
          </div>
          <div className="temperature">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>


        {data.name != undefined &&
          <div className="bottom">
            <div className="feels">
              <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
              {data.main ? <p className="value">{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              <FontAwesomeIcon icon={faWater} />
              {data.main ? <p className="value">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              <FontAwesomeIcon icon={faWind} />
              {data.wind ? <p className="value">{data.wind.speed.toFixed()}km/h</p> : null}
              <p>Wind speed</p>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default App;
