import React, { useState } from 'react'
import Axios from 'axios'

export default function SingleClimb(props) {
  const [theClimb, setTheClimb] = useState({})

  Axios.get(`api/climb/getone/${props.match.params.routeName}`).then(resp => {
    console.log({ theClimb })
    setTheClimb(resp.data)
  })

  return (
    <div>
      <h1>SiNgLe ClImb PaGe</h1>
      <h1>{theClimb.routeName}</h1>
      <p>{theClimb.rating}</p>
      {theClimb.trad && <p>trad</p>}
      {theClimb.sport && <p>sport</p>}
      <p>{theClimb.location}</p>
      <p>{theClimb.height}</p>
      <p>{theClimb.directions}</p>
      <p>{theClimb.description}</p>
      <p>{theClimb.notes}</p>
    </div>
  )
}
