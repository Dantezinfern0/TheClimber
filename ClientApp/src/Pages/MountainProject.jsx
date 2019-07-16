import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './MountainProject.css'
import Footer from '../components/Footer.jsx'

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
        <h2 className="title-effect">Climbing Record</h2>
        <h6>Brought to you by MountainProject.com</h6>
        <hr />
        <h5>Hardest Climb Completed:{this.state.tickInfo.hardest}</h5>
        <h5>Average Rating:{this.state.tickInfo.average}</h5>
        <div className="thin-black-border">
        <ul className="scroll-it">
          {this.state.routes.map(m => {
            return (
              <Link key={m.id} to={`/route/${m.id}`}>
                <li className="pad-it">{m.name}<br/>Rating:{m.rating}<br/>Type:{m.type}</li>
              </Link>
            )
          })}
        </ul>
        </div>
        <Footer />
      </div>
    )
  }
}

export default MountainProject
