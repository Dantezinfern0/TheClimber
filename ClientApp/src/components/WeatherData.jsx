import React, { Component } from 'react'
import axios from 'axios'
import './WeatherData.css'
const apiKey = '&appid=770d3167b3eba3b1c6578ba7c1153c3b'

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
      description: ''
    }
  }
  getWeather = event => {
    event.preventDefault()
    axios
      .get(`HTTPS://api.openweathermap.org/data/2.5/weather?zip=${this.state.userInput}${apiKey}`)
      .then(resp => {
        console.log(resp.data)
        this.setState({
          weather: resp.data,
          max: resp.data.main.temp_max,
          min: resp.data.main.temp_min,
          press: resp.data.main.pressure,
          temperature: resp.data.main.temp,
          description: resp.data.weather[0].description
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
        <div>
          <h1>Know Before You Go</h1>
          <h2>Weather Check</h2>
          <div>
            <form className="weather-form" onSubmit={this.getWeather}>
              <input type="text" placeholder="zip code..." onChange={this.updateValue} />
              <button onClick={this.getWeather}>Search</button>
              <p>City: {this.state.weather.name}</p>
              <p>Pressure: {this.state.press}</p>
              <p>Current Temperature:{this.state.temperature}˚K</p>
              <p>{this.state.description}</p>
              <p>High:{this.state.max}˚K</p>
              <p>Low:{this.state.min}˚K</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherData
