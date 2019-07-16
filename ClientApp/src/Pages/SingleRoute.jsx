import React, { Component } from 'react'
import axios from 'axios'
import Footer from '../components/Footer.jsx'

const URL = 'https://www.mountainproject.com/data/get-routes?routeIds='
const apiKey = '&key=200507880-8cf9c49dbbe6841799698503aad73a96'

class SingleRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routeInfo: {}
    }
  }
  componentDidMount() {
    axios.get(`${URL}${this.props.match.params.id}${apiKey}`).then(resp => {
      console.log(resp.data)
      this.setState({
        routeInfo: resp.data.routes[0]
      })
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.routeInfo.name}</h1>
        <h6>Brought to you by MountainProject.com</h6>
        <h6>Pitches: {this.state.routeInfo.pitches}</h6>
        <h6>Rating: {this.state.routeInfo.rating}</h6>
        <h6>Type: {this.state.routeInfo.type}</h6>
        {this.state.routeInfo.imgMedium && (
          <img alt="climb reference" src={this.state.routeInfo.imgMedium} />
        )}
        <Footer />
      </div>
    )
  }
}

export default SingleRoute
