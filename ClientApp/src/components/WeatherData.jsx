import React, { Component } from 'react'
import axios from 'axios'
import './WeatherData.css'
import { Link } from 'react-router-dom'
const weatherApiKey = '&appid=770d3167b3eba3b1c6578ba7c1153c3b'
const weatherUrl = 'HTTPS://api.openweathermap.org/data/2.5/weather?zip='
const mountainUrl =
  'https://www.mountainproject.com/data/get-routes-for-lat-lon?'
const mountainUrlEnd =
  '&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200507880-8cf9c49dbbe6841799698503aad73a96'

class WeatherData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      weather: {},
      temperature: 0,
      press: 0,
      min: 0,
      max: 0,
      description: '',
      lat: 40.3,
      lon: -105.25,
      mountainProject: []
    }
  }

  getWeather = event => {
    event.preventDefault()
    axios
      .get(`${weatherUrl}${this.state.userInput}${weatherApiKey}`)
      .then(resp => {
        console.log(resp.data)
        this.setState({
          weather: resp.data,
          max: Math.ceil((resp.data.main.temp_max - 273.15) * 9) / 5 + 32,
          min: Math.ceil((resp.data.main.temp_min - 273.15) * 9) / 5 + 32,
          press: resp.data.main.pressure,
          temperature: Math.ceil((resp.data.main.temp - 273.15) * 9) / 5 + 32,
          description: resp.data.weather[0].description,
          lat: resp.data.coord.lat,
          lon: resp.data.coord.lon
        })
      })
    axios
      .get(
        `${mountainUrl}lat=${this.state.lat}&lon=${
          this.state.lon
        }${mountainUrlEnd}`
      )
      .then(resp => {
        console.log(resp.data)
        this.setState({
          mountainProject: resp.data.routes
        })
      })
  }

  updateValue = e => {
    const state = this.state
    state.userInput = e.target.value
    this.setState(state)
  }

  render() {
    return (
      <div className="weather-background">
        <div className="weather-container">
          <section>
            <h1>Know Before You Go</h1>
            <h2>Weather Check</h2>
            <div>
              <form className="weather-form" onSubmit={this.getWeather}>
                <input
                  type="text"
                  placeholder="zip code..."
                  onChange={this.updateValue}
                />
                <button onClick={this.getWeather}>Search</button>
              </form>
              <p>City: {this.state.weather.name}</p>
              <p>Pressure: {this.state.press}</p>
              <p>Current Temperature: {this.state.temperature}˚F</p>
              <p>Conditions: {this.state.description}</p>
              <p>High: {this.state.max}˚F</p>
              <p>Low: {this.state.min}˚F</p>
            </div>
          </section>
          <section>
            <h1>Route Info</h1>
            <ul>
              {this.state.mountainProject.map(m => {
                return (
                  <Link key={m.id} to={`/route/${m.id}`}>
                    <li>
                      {' '}
                      {m.name}-{m.rating}-{m.type}{' '}
                    </li>
                  </Link>
                )
              })}
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

export default WeatherData
