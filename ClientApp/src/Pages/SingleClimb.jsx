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
    Axios.get(`api/climb/${this.props.match.params.Id}`).then(resp => {
      console.log(resp.data)
      this.setState({
        theClimb: resp.data
      })
    })
  }
  // componentDidMount(){
  //   Axios.get(`api/climb/3`).then(resp => {
  //     console.log(resp.data)
  //     this.setState({
  //       theClimb: resp.data
  //     })
  //   })
  // }

  render() {
    return (
      <div>
        <section>Single Climb Info</section>
         <h1>{this.state.theClimb.routeName}</h1>
        
        <p>{this.state.theClimb.rating}</p>
        {this.state.theClimb.trad && <p>trad</p>}
        {this.state.theClimb.sport && <p>sport</p>}
        <p>{this.state.theClimb.location}</p>
        <p>{this.state.theClimb.height} ft</p>
        <p>{this.state.theClimb.directions}</p>
        <p>{this.state.theClimb.description}</p>
        <p>{this.state.theClimb.notes}</p>
      </div>
    )
  }
}

export default SingleClimb
