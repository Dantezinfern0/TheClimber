import React, { useState } from 'react'
import './ClimbInputPage.css'


export default function InputPage() {
  const [location, setLocation] = useState()
  const [routeName, setRouteName] = useState()
  const [rating, setRating] = useState()
  const [height, setHeight] = useState(40)
  const [directions, setDirections] = useState()
  const [description, setDescription] = useState()
  const [notes, setNotes] = useState()

  return (
    <div className="route-input-page">
      <h2>Route Entry Form</h2>
      <form>
        <section className="route-form">
          <h6>
            Location
            <input type="text" placeholder="Red Rocks..." onChange={setLocation} />
          </h6>
          <h6>
            Route Name
            <input type="text" placeholder="The Climb..." onChange={setRouteName} />
          </h6>
          <h6>
            Rating
            <input type="text" placeholder="5.10b..." onChange={setRating} />
          </h6>

          <h6>
            Height {height}ft
            <input
              onChange={e => setHeight(e.target.value)}
              type="range"
              max="200"
              min="20"
              step="10"
              value={height}
            />
          </h6>
          <h5>Equipment</h5>
          <ul className="equipment-list">
            <label for="Sport">
              Sport Setup
              <input type="radio" id="Sport" value="Sport" name="equipment" />
            </label>
            <label for="trad-rack">
              Trad Gear
              <input
                type="radio"
                id="trad-rack"
                value="trad-rack"
                name="equip"
              />
            </label>
            <label for="ATC">
              ATC Belay Device
              <input type="radio" id="ATC" value="ATC" name="equip" />
            </label>
            <label for="grigri">
              GriGri
              <input type="radio" id="grigri" value="grigri" name="equip" />
            </label>
          </ul>
          <h5>Directions</h5>
          <textarea cols="40" rows="8" wrap="hard" onChange={setDirections} />
          <h5>Description</h5>
          <textarea cols="40" rows="8" wrap="hard" onChange={setDescription} />
          <h5>Notes</h5>
          <textarea cols="40" rows="8" wrap="hard" onChange={setNotes} >Protection:</textarea>
          <div>
            <button>Add Route</button>
          </div>
        </section>
      </form>
    </div>
  )
}
