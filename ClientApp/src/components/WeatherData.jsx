import React, { Component } from 'react'
import axios from 'axios'
const apiKey = '&appid=770d3167b3eba3b1c6578ba7c1153c3b'

class WeatherData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: [],
      temperature: {}
    }
  }
  getWeather(event) {
    event.preventDefault()
    axios
      .get(`HTTPS://api.openweathermap.org/data/2.5/weather?zip=33704${apiKey}`)
      .then(resp => {
        this.setState({
          weather: resp.data
          // temperature: Math.ceil((resp.data.main.temp - 273.15) * 9) / 5 + 32
        })
      })
  }
  render() {
    return (
      <div>
        <div>
          <h1>Know Before You Go</h1>
          <h2>Weather Check</h2>
          <div>
            <form onSubmit={this.getWeather}>
              <button onClick={this.getWeather}>Search</button>
              <input type="text" placeholder="zip code..." />
              {/* {weather.name && <p>{weather.name}</p>} */}
              {/* {weather.weather[0].description && <p>{weather.weather[0].description}</p>} */}
              {/* {temperature && <p>{temperature}˚F</p>} */}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherData
