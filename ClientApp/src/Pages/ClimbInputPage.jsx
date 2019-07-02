import React, { useState } from 'react'
import './ClimbInputPage.css'


export default function InputPage() {
  const [height, setHeight] = useState(40)
  return (
    <div className="route-input-page">
      <h2>Route Entry Form</h2>
      <form>
        <section className="route-form">
          <h6>
            Location
            <input type="text" placeholder="Red Rocks..." />
          </h6>
          <h6>
            Route Name
            <input type="text" placeholder="The Climb..." />
          </h6>
          <h6>
            Rating
            <input type="text" placeholder="5.10b..." />
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
          <h5>Notes</h5>
          <textarea cols="40" rows="8" wrap="hard" >Protection:</textarea>
          <div>
            <button>Add Route</button>
          </div>
        </section>
      </form>
    </div>
  )
}
