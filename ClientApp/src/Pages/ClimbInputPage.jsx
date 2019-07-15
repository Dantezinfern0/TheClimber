import React, { useState } from 'react'
import Footer from '../components/Footer.jsx'
import './ClimbInputPage.css'
import axios from 'axios'
import auth from '../auth'

export default function InputPage() {
  const [location, setLocation] = useState('')
  const [routeName, setRouteName] = useState('')
  const [rating, setRating] = useState('')
  const [height, setHeight] = useState(40)
  const [directions, setDirections] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState('')
  const [sport, setSport] = useState()
  const [trad, setTrad] = useState()


  function sendData(e) {
    e.preventDefault()
    axios
      .post('api/climb/add', {
        sport: sport,
        trad: trad,
        location: location,
        routeName: routeName,
        rating: rating,
        height: height,
        directions: directions,
        description: description,
        notes: notes
      })
      .then(resp => console.log(resp.data))
    window.confirm('Log Entry Confirmed!')
    window.location.reload(true)
  }

  return (
    <div className="route-input-page">
      <h2 className="title-it">Route Entry Form</h2>
      <form className="form-class" onSubmit={sendData}>
        <section className="first-half">
          <h6 className="the-left-top">
            Location
            <input
              type="text"
              placeholder="Red Rocks..."
              onChange={e => setLocation(e.target.value)}
              value={location}
            />
          </h6>
          <h6 className="the-left">
            Route Name
            <input
              type="text"
              placeholder="The Climb..."
              onChange={e => setRouteName(e.target.value)}
              value={routeName}
            />
          </h6>
          <h6 className="the-left">
            Rating
            <input
              type="text"
              placeholder="5.10b..."
              onChange={e => setRating(e.target.value)}
              value={rating}
            />
          </h6>

          <h6 className="the-left">Height {height}ft</h6>
          <div className="equipment-list">
            <input
              className="slider-bar"
              type="range"
              max="200"
              min="20"
              step="1"
              onChange={e => setHeight(e.target.value)}
              value={height}
            />
          </div>
          <h5 className="the-left">Equipment</h5>
          <div className="equipment-list-bottom">
            <span>
              <label className="checkbox">Sport Setup </label>
              <input
                type="checkbox"
                onChange={e => setSport(e.target.checked)}
                value={sport}
              />
            </span>
            <span>
              <label className="checkbox">Trad Gear </label>
              <input
                type="checkbox"
                onChange={e => setTrad(e.target.checked)}
                value={trad}
              />
            </span>
          </div>
        </section>
        <section className="text-areas">
          <h5 className="the-dir">Directions</h5>
          <textarea
          className="bottom-border"
            cols="40"
            rows="8"
            wrap="hard"
            onChange={e => setDirections(e.target.value)}
            value={directions}
          />
          <h5 className="the-dir">Description</h5>
          <textarea
          className="bottom-border"
            cols="40"
            rows="8"
            wrap="hard"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
          <h5 className="the-dir">Notes</h5>
          <textarea
          className="bottom-border"
            cols="40"
            rows="8"
            wrap="hard"
            onChange={e => setNotes(e.target.value)}
            value={notes}
          >
            Protection:
          </textarea>
          <div className="give-me-a-margin">
            <button className="button" onClick={sendData}>Add Route</button>
          </div>
        </section>
      </form>
      <Footer />
    </div>
  )
}
