import React, { useState } from 'react'
import Axios from 'axios'

export default function WeatherForcast() {
  const [weather, setWeather] = useState([])
  const [temp, setTemp] = useState('')
  // const [userInput, setUserInput] = useState('')
  const apiKey = '&appid=770d3167b3eba3b1c6578ba7c1153c3b'
  
  const getWeather = () => {
    Axios.get(
      `HTTPS://api.openweathermap.org/data/2.5/weather?zip=33704${apiKey}`
    ).then(resp => {
      setWeather(resp.data)
      let t = Math.ceil((weather.main.temp - 273.15) * 9) / 5 + 32
      setTemp( t + '˚F')
      console.log(weather)
    })
  }

  return (
    <div>
      <h1>Know Before You Go</h1>
      <h2>Weather Check</h2>
      <div>
        <button onClick={() => getWeather()}>Search</button>
        <input
          type="text"
          // onChange={(e) => setUserInput(e)}
          placeholder="zip code..."
        />
        {weather.name && <p>{weather.name}</p>}
        {/* {weather.weather[0].description && <p>{weather.weather[0].description}</p>} */}
        {temp && <p>temp</p>}
      </div>
    </div>
  )
}
