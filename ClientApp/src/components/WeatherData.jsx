import React, { Component } from 'react'
import axios from 'axios'
import './WeatherData.css'
import { Link } from 'react-router-dom'
const weatherApiKey = '&appid=770d3167b3eba3b1c6578ba7c1153c3b'
const weatherUrl = 'HTTPS://api.openweathermap.org/data/2.5/weather?zip='
const mountainUrl =
  'https://www.mountainproject.com/data/get-routes-for-lat-lon?'
const mountainUrlEnd =
  '&maxDistance=20&minDiff=5.6&maxDiff=5.10&key=200507880-8cf9c49dbbe6841799698503aad73a96'
// 34.112, -118.926 - echo cliffs
// 	34.096, -118.731 - Malibu Creek State Park
// 36.596, -118.109 - Alabama Hills
//  36.155, -115.436 red Rocks, NV black corridor

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
          description: resp.data.weather[0].description
        })
        axios
          .get(
            `${mountainUrl}lat=${resp.data.coord.lat}&lon=${
              resp.data.coord.lon
            }${mountainUrlEnd}`
          )
          .then(resp => {
            console.log(resp.data)
            this.setState({
              mountainProject: resp.data.routes
            })
          })
      })
  }
  autoUpdate = e => {
    const state = this.state
    state.userInput = e.target.value
    this.setState(state)
    this.getWeather(e)
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
            <h6>Favorite Spots</h6>
            <button value="92252" onClick={this.autoUpdate}>
              Joshua Tree
            </button>
            <button value="89506" onClick={this.autoUpdate}>
              Red Rocks
            </button>
            <button value="93545" onClick={this.autoUpdate}>
              Lone Pine
            </button>
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
            <h1 className="route-list">Route Info</h1>
            <ul className="list-of-routes">
              {this.state.mountainProject.map(m => {
                return (
                  <Link key={m.id} to={`/route/${m.id}`}>
                    <li>
                      {m.name}-{m.rating}-{m.type}
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
