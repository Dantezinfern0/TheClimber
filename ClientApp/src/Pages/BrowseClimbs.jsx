import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function BrowseClimbs() {
  const [theClimbs, setTheClimbs] = useState([])

  useEffect(() => {
    axios.get('api/climb/getall').then(resp => {
      setTheClimbs(resp.data)
      console.log(resp.data)
    })
  }, [])

  return (
    <div>
      <h2>List Of Climbs</h2>
      <ul>
        {theClimbs.map(m => {
          return (
            <Link id={m.routeName} to="/${m.routeName}">
              <li> {m.routeName} </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
