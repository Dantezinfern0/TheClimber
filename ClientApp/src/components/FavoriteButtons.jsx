import React, { Component } from 'react';
import axios from 'axios'

class FavoriteButtons extends Component {
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
  render() {
    return (
      <div>
        <h6>Favorite Spots</h6>
                  <section className="button-container">
                    {/* <button
                      className="button"
                      data-lat="36.112"
                      data-lon="-118.926"
                      onClick={this.getLatLon}
                    >
                      EchoCliffs
                    </button> */}
                    <button
                      className="button"
                      data-lat="34.096"
                      data-lon="-118.731"
                      onClick={this.getLatLon}
                    >
                      MalibuCreek
                    </button>
                    <button
                      className="button"
                      data-lat="36.596"
                      data-lon="-118.109"
                      onClick={this.getLatLon}
                    >
                      AlabamaHills
                    </button>
                    <button
                      className="button"
                      data-lat="36.155"
                      data-lon="-115.436"
                      onClick={this.getLatLon}
                    >
                      RedRocks,NV
                    </button>
                    <button
                      className="button"
                      data-lat="34.665"
                      data-lon="-116.978"
                      onClick={this.getLatLon}
                    >
                      NewJackCity
                    </button>
                    <button
                      className="button"
                      data-lat="34.348"
                      data-lon="-117.945"
                      onClick={this.getLatLon}
                    >
                      AngelesForrest
                    </button>
                    <button
                      className="button"
                      data-lat="34.414"
                      data-lon="-117.859"
                      onClick={this.getLatLon}
                    >
                      DevilsPunchBowl
                    </button>
                    <button
                      className="button"
                      data-lat="34.497"
                      data-lon="-119.852"
                      onClick={this.getLatLon}
                    >
                      Playgrounds
                    </button>
                    <button
                      className="button"
                      data-lat="34.578"
                      data-lon="-119.258"
                      onClick={this.getLatLon}
                    >
                      SespeGorge
                    </button>
                    <button
                      className="button"
                      data-lat="34.508"
                      data-lon="-119.276"
                      onClick={this.getLatLon}
                    >
                      WheelerGorge
                    </button>
                    <button
                      className="button"
                      data-lat="34.584"
                      data-lon="-119.263"
                      onClick={this.getLatLon}
                    >
                      Fortress
                    </button>
                    <button
                      className="button"
                      data-lat="33.76"
                      data-lon="-116.683"
                      onClick={this.getLatLon}
                    >
                      Tahquitz
                    </button>
                    <button
                      className="button"
                      data-lat="34.271"
                      data-lon="-118.604"
                      onClick={this.getLatLon}
                    >
                      StoneyPoint
                    </button>
                    <button
                      className="button"
                      value="92252"
                      onClick={this.autoUpdate}
                    >
                      JoshuaTree
                    </button>
                    {/* <button
                      className="button"
                      value="89506"
                      onClick={this.autoUpdate}
                    >
                      RedRocks
                    </button> */}
                    <button
                      className="button"
                      value="93545"
                      onClick={this.autoUpdate}
                    >
                      LonePine
                    </button>
                  </section>
      </div>
    );
  }
}

export default FavoriteButtons;