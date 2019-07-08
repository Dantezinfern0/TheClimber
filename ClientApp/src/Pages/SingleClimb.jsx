import React, { Component } from 'react'
import Axios from 'axios'

class SingleClimb extends Component {
  state = ({
    theClimb: {}
  })

  componentDidMount() {
    Axios.get(`api/climb/${this.props.match.params.Id}`).then(resp => {
      
      this.setState =({
        theClimb: resp.data
      })
    })
  }

  render() {
    return (
      <div>
        {/* <h1>{theClimb.routeName}</h1>
        <p>{theClimb.rating}</p>
        {theClimb.trad && <p>trad</p>}
        {theClimb.sport && <p>sport</p>}
        <p>{theClimb.location}</p>
        <p>{theClimb.height} ft</p>
        <p>{theClimb.directions}</p>
        <p>{theClimb.description}</p>
        <p>{theClimb.notes}</p> */}
      </div>
    )
  }
}

export default SingleClimb

