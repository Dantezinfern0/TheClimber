import React, { useState } from 'react'
import './ClimbInputPage.css'
import axios from 'axios'

export default function InputPage() {
  const [location, setLocation] = useState('')
  const [routeName, setRouteName] = useState('')
  const [rating, setRating] = useState('')
  const [height, setHeight] = useState(40)
  const [directions, setDirections] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState('')
  const [sport, setSport] = useState(Boolean)
  const [trad, setTrad] = useState(Boolean)

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
  }

  return (
    <div className="route-input-page">
      <h2>Route Entry Form</h2>
      <form onSubmit={sendData}>
        <section className="route-form">
          <h6>
            Location
            <input
              type="text"
              placeholder="Red Rocks..."
              onChange={e => setLocation(e.target.value)}
              value={location}
            />
          </h6>
          <h6>
            Route Name
            <input
              type="text"
              placeholder="The Climb..."
              onChange={e => setRouteName(e.target.value)}
              value={routeName}
            />
          </h6>
          <h6>
            Rating
            <input
              type="text"
              placeholder="5.10b..."
              onChange={e => setRating(e.target.value)}
              value={rating}
            />
          </h6>

          <h6>Height {height}ft</h6>
          <div className="equipment-list">
            <input
              type="range"
              max="200"
              min="20"
              step="1"
              onChange={e => setHeight(e.target.value)}
              value={height}
            />
          </div>
          <h5>Equipment</h5>
          <div className="equipment-list">
            <label for="Sport">
              <input
                type="checkbox"
                id="sport"
                name="sportRack"
                onChange={e => setSport(e.target.checked)}
                value={sport}
              />
              Sport Setup
            </label>
            <label for="trad-rack">
              <input
                type="checkbox"
                id="trad-rack"
                name="tradRack"
                onChange={e => setTrad(e.target.checked)}
                value={trad}
              />
              Trad Gear
            </label>
          </div>
          <h5>Directions</h5>
          <textarea
            cols="40"
            rows="8"
            wrap="hard"
            onChange={e => setDirections(e.target.value)}
            value={directions}
          />
          <h5>Description</h5>
          <textarea
            cols="40"
            rows="8"
            wrap="hard"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
          <h5>Notes</h5>
          <textarea
            cols="40"
            rows="8"
            wrap="hard"
            onChange={e => setNotes(e.target.value)}
            value={notes}
          >
            Protection:
          </textarea>
          <div>
            <button onClick={sendData}>Add Route</button>
          </div>
        </section>
      </form>
    </div>
  )
}
