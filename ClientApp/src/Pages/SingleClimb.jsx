import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function SingleClimb(props) {
  const [theClimb, setTheClimb] = useState({})
  // const [testHook, setTestHook] = useState('')
  // {props.match.params.id}
  useEffect(() => {
    Axios.get(`api/climb/${props.match.params.Id}`).then(resp => {
      console.log({ theClimb })
      setTheClimb(resp.data)
    })
  }, [])

  return (
    <div>
      <h1>{theClimb.routeName}</h1>
      <p>{theClimb.rating}</p>
      {theClimb.trad && <p>trad</p>}
      {theClimb.sport && <p>sport</p>}
      <p>{theClimb.location}</p>
      <p>{theClimb.height} ft</p>
      <p>{theClimb.directions}</p>
      <p>{theClimb.description}</p>
      <p>{theClimb.notes}</p>
    </div>
  )
}
