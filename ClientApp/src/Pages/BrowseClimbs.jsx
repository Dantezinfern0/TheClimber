import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function BrowseClimbs() {
  
  const [theClimbs, setTheClimbs] = useState()

  useEffect(() => {
    axios.get('api/climb/getall').then(resp => {
      setTheClimbs(resp.data)
    })
  })
  return(
    <div>
      <h2>List Of Climbs</h2>
      <p>{theClimbs.map(m => m.routeName)}</p>
    </div>
  )
}