import React, { Component } from 'react'
import Axios from 'axios'

class SingleClimb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theClimb: []
    }
  }

  componentDidMount() {
    Axios.get(`api/climb/${this.props.match.params.routeId}`).then(resp => {
      console.log(resp.data)
      this.setState({
        theClimb: resp.data
      })
    })
  }

  render() {
    return (
      <div>
        <section>Single Climb Info</section>
         {/* <h1>{this.state.theClimb.routeName}</h1> */}
        {/*
        <p>{theClimb.rating}</p>
        {theClimb.trad && <p>trad</p>}
        {theClimb.sport && <p>sport</p>}
        {theClimb && <p>{theClimb.location}</p>}
        <p>{theClimb.height} ft</p>
        <p>{theClimb.directions}</p>
        <p>{theClimb.description}</p>
        <p>{theClimb.notes}</p> */}
      </div>
    )
  }
}

export default SingleClimb
