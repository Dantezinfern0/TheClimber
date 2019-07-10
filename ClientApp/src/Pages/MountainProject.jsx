import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const URL1 =
  'https://www.mountainproject.com/data/get-ticks?email=danteharasz@gmail.com&key=200507880-8cf9c49dbbe6841799698503aad73a96'
const getById = 'https://www.mountainproject.com/data/get-routes?routeIds='
const apiKey = '&key=200507880-8cf9c49dbbe6841799698503aad73a96'

class MountainProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tickInfo: [],
      routes: []
    }
  }
  componentDidMount() {
    axios.get(`${URL1}`).then(resp => {
      console.log('1st half', resp.data)
      this.setState({
        tickInfo: resp.data
      })
      axios
        .get(
          `${getById}${resp.data.ticks.map(m => m.routeId).join(',')}${apiKey}`
        )
        .then(resp => {
          console.log('2nd half', resp.data)
          this.setState({
            routes: resp.data.routes
          })
        })
    })
  }

  render() {
    return (
      <div>
        <h1>Climbing Record</h1>
        <h3>Hardest:{this.state.tickInfo.hardest}</h3>
        <h3>Average:{this.state.tickInfo.average}</h3>
        <ul>
          {this.state.routes.map(m => {
            return (
              <Link key={m.id} to={`/route/${m.id}`}>
                <li>{m.name}</li>
              </Link>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default MountainProject
