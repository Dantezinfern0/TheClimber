import React, { Component } from 'react'
import axios from 'axios'
import './WeatherData.css'
import { Link } from 'react-router-dom'
import Footer from './Footer.jsx'
import FavoriteButtons from './FavoriteButtons.jsx'

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const weatherApiKey = '&appid=770d3167b3eba3b1c6578ba7c1153c3b'
const mountainUrl =
  'https://www.mountainproject.com/data/get-routes-for-lat-lon?'
const mountainUrlEnd =
  '&maxDistance=20&minDiff=5.6&maxDiff=5.10&key=200507880-8cf9c49dbbe6841799698503aad73a96'

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
      .get(`${weatherUrl}zip=${this.state.userInput},us${weatherApiKey}`)
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
      <div>
        <div className="weather-background">
          <div className="weather-container">
            <div>
              <h2 className="pad-it-good">Weather Check</h2>
              <hr className="zero-margin"/>
              <section className="flex-box">
                <div>
                  <form className="weather-form" onSubmit={this.getWeather}>
                    <h6 className="zero-margin">Search</h6>
                    <input
                      type="text"
                      placeholder="zip code..."
                      onChange={this.updateValue}
                    />
                    <br />
                    <button onClick={this.getWeather}>Search</button>
                  </form>
                  <section className="weather-info-container">
                    <p>City: {this.state.weather.name}</p>
                    <p>Pressure: {this.state.press}</p>
                    <p>Current Temp: {this.state.temperature}˚F</p>
                    <p>Conditions: {this.state.description}</p>
                    <p>High: {this.state.max}˚F</p>
                    <p>Low: {this.state.min}˚F</p>
                  </section>
                </div>
                <div>
                  <FavoriteButtons />
                </div>
              </section>
            </div>
            <section className="route-info-container">
              <h1 className="route-list">Nearby Route Info</h1>
              <ul className="list-of-routes">
                {this.state.mountainProject.map(m => {
                  return (
                    <Link className="pad-me" key={m.id} to={`/route/${m.id}`}>
                      <li className="ink-color">
                        {m.name}--{m.rating}--{m.type}
                      </li>
                    </Link>
                  )
                })}
              </ul>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default WeatherData
