import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function WeatherForcast() {
  const [temperature, setTemperature] = useState({})
  const [userInput, setUserInput] = useState('33704')
  const apiKey = '&appid=770d3167b3eba3b1c6578ba7c1153c3b'

  useEffect(() => {
    Axios.get(
      `HTTPS://api.openweathermap.org/data/2.5/weather?q=${userInput}${apiKey}`
    ).then(weather => {
      setTemperature(weather.main.temp)
      console.log(temperature)
    })
  }, [])

  return (
    <div>
      <h1>Know Before You Go</h1>
      <h2>Weather Check</h2>
      <div>
        <button>Search</button>
        <input
          type="text"
          onChange={(e) => {
            e.setZipCode
          }}
        />
      </div>
    </div>
  )
}
