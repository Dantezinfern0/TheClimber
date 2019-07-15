import React, { Component } from 'react'
import axios from 'axios'
import './WeatherData.css'
import { Link } from 'react-router-dom'
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
 
  getLatLon = event => {
    event.preventDefault()
    axios
      .get(
        `${weatherUrl}lat=${event.target.dataset.lat}&lon=${
          event.target.dataset.lon
        }${weatherApiKey}`
      )
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
      })
    axios
      .get(
        `${mountainUrl}lat=${event.target.dataset.lat}&lon=${
          event.target.dataset.lon
        }${mountainUrlEnd}`
      )
      .then(resp => {
        console.log(resp.data)
        this.setState({
          mountainProject: resp.data.routes
        })
      })
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
      <div className="weather-background">
        <div className="weather-container">
          <section>
            <h1>Know Before You Go</h1>
            <h2>Weather Check</h2>
            <h6>Favorite Spots</h6>
            <section className="button-container">
              <button
                data-lat="36.112"
                data-lon="-118.926"
                onClick={this.getLatLon}
              >
                EchoCliffs
              </button>
              <button
                data-lat="34.096"
                data-lon="-118.731"
                onClick={this.getLatLon}
              >
                MalibuCreek
              </button>
              <button
                data-lat="36.596"
                data-lon="-118.109"
                onClick={this.getLatLon}
              >
                AlabamaHills
              </button>
              <button
                data-lat="36.155"
                data-lon="-115.436"
                onClick={this.getLatLon}
              >
                RedRocks,NV
              </button>
              <button
                data-lat="34.665"
                data-lon="-116.978"
                onClick={this.getLatLon}
              >
                NewJackCity
              </button>
              <button
                data-lat="34.348"
                data-lon="-117.945"
                onClick={this.getLatLon}
              >
                AngelesForrest
              </button>
              <button
                data-lat="34.414"
                data-lon="-117.859"
                onClick={this.getLatLon}
              >
                DevilsPunchBowl
              </button>
              <button
                data-lat="34.497"
                data-lon="-119.852"
                onClick={this.getLatLon}
              >
                Playgrounds
              </button>
              <button
                data-lat="34.578"
                data-lon="-119.258"
                onClick={this.getLatLon}
              >
                SespeGorge
              </button>
              <button
                data-lat="34.508"
                data-lon="-119.276"
                onClick={this.getLatLon}
              >
                WheelerGorge
              </button>
              <button
                data-lat="34.584"
                data-lon="-119.263"
                onClick={this.getLatLon}
              >
                Fortress
              </button>
              <button
                data-lat="33.76"
                data-lon="-116.683"
                onClick={this.getLatLon}
              >
                Tahquitz
              </button>
              <button
                data-lat="34.271"
                data-lon="-118.604"
                onClick={this.getLatLon}
              >
                StoneyPoint
              </button>
              <button value="92252" onClick={this.autoUpdate}>
                JoshuaTree
              </button>
              <button value="89506" onClick={this.autoUpdate}>
                RedRocks
              </button>
              <button value="93545" onClick={this.autoUpdate}>
                LonePine
              </button>
            </section>
            <div>
              <form className="weather-form" onSubmit={this.getWeather}>
                <h6>Search</h6>
                <input
                  type="text"
                  placeholder="zip code..."
                  onChange={this.updateValue}
                />
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
          </section>
          <section className="route-info-container">
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
