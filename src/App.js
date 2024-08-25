import React, { useState } from 'react';
import axios from 'axios';
import defaultBackground from './images/defaultBackground.jpg';
import temperature from './images/temperature.png';
import humidity from './images/humidity.png';
import wind from './images/wind.png';
import coldBackground from './images/cold.jpg';
import warmBackground from './images/warm.jpg';


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [background, setBackground] = useState(defaultBackground);
  const [showWeatherContainer, setShowWeatherContainer] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [showWeatherDetails, setShowWeatherDetails] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
      axios.get(url).then((res) => {
        setData(res.data);

        //Update background image based on temperature
        /*const temp = res.data.main.temp;
        if (temp < 15) {
          setBackground(coldBackground);
        } else {
          setBackground(warmBackground);
        }*/

        setShowDetails(true);
        setTimeout(() => setShowWeatherContainer(true), 100); // Show weather container first
        setTimeout(() => setShowBox(true), 500);  // Delay for weather box
        setTimeout(() => setShowWeatherDetails(true), 1000);  // Delay for details

      });
      setLocation('');
    }
  };


  return (
    <div className="app" style={{ backgroundImage: `url(${defaultBackground})` }}>
      <div className="container">
        <div className="search">
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter location'
            type="text" />
        </div>

        {showDetails && (
          <div className={`weather-container ${showWeatherContainer ? 'show' : ''}`}>
            <div className={`weather-box ${showBox ? 'show' : ''}`}>
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
          

            <div className={`weather-details ${showWeatherDetails ? 'show' : ''}`}>
              <div className="detail">
                <img src={temperature} alt="Temperature" />
                <div className="description">
                  {data.main ? <p className="value">{data.main.feels_like.toFixed()}°C</p> : null}
                  <p className="text">Feels like</p>
                </div>
              </div>
              <div className="detail">
                <img src={humidity} alt="Humidity" />
                <div className="description">
                  {data.main ? <p className="value">{data.main.humidity}%</p> : null}
                  <p className="text">Humidity</p>
                </div>
              </div>
              <div className="detail">
                <img src={wind} alt="Wind" />
                <div className="description">
                  {data.wind ? <p className="value">{data.wind.speed.toFixed()} KM/H</p> : null}
                  <p className="text">Wind speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
