import React, { Component } from 'react'
import Axios from 'axios'
const apiKey = '&appid=770d3167b3eba3b1c6578ba7c1153c3b'

class WeatherData extends Component {
  state = {
    weather: weather,
    temperature: temperature
  }
  getWeather() {
    Axios.get(
      `HTTPS://api.openweathermap.org/data/2.5/weather?zip=33704${apiKey}`
    ).then(resp => {
      setState = {
        weather: resp.data,
        temperature: Math.ceil((resp.main.temp - 273.15) * 9) / 5 + 32
      }
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Know Before You Go</h1>
          <h2>Weather Check</h2>
          <div>
            <button onClick={() => getWeather()}>Search</button>
            <input
              type="text"
              // onChange={e => setUserInput(e.target.value)}
              placeholder="zip code..."
            />
            {weather.name && <p>{weather.name}</p>}
            {/* {weather.weather[0].description && <p>{weather.weather[0].description}</p>} */}
            {temp && <p>{temp}˚F</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherData
