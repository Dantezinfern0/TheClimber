import React, { Component } from 'react'
import Axios from 'axios'
import './SingleClimb.css'

class SingleClimb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theClimb: []
    }
  }

  componentDidMount() {
    Axios.get(`api/climb/${this.props.match.params.id}`).then(resp => {
      console.log(resp.data)
      this.setState({
        theClimb: resp.data
      })
    })
  }
  

  render() {
    return (
      <div>
        <h1>{this.state.theClimb.routeName}</h1>
        <h6>Rating</h6>
        <p>{this.state.theClimb.rating}</p>
        {/* {this.state.theClimb.trad && <p>trad</p>}
        {this.state.theClimb.sport && <p>sport</p>} */}
        <h6>Climbing Area</h6>
        <p>{this.state.theClimb.location}</p>
        <h6>Height</h6>
        <p>{this.state.theClimb.height} ft</p>
        <h6>Directions</h6>
        <p>{this.state.theClimb.directions}</p>
        <h6>Description</h6>
        <p>{this.state.theClimb.description}</p>
        <p>{this.state.theClimb.notes}</p>
      </div>
    )
  }
}

export default SingleClimb
