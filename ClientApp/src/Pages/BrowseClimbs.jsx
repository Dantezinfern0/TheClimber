import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './BrowseClimbs.css'

class BrowseClimbs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: []
    }
  }
  deleteItem = e => {
    window.confirm('Delete this Entry?')
    axios.delete(`api/Climb/${e.target.value}`).then(resp => {
      console.log(resp.data)
    })
    window.location.reload(true)
  }
  componentDidMount() {
    axios.get('api/climb/getall').then(resp => {
      this.setState({
        info: resp.data
      })
    })
  }
  render() {
    return (
      <div>
        <h2>Personal Record Climbs</h2>
        <ul>
          {this.state.info.map(m => {
            return (
              <div className="list-item-div">
                <Link key={m.id} to={`/browse/${m.id}`}>
                  <li> {m.routeName} </li>
                </Link>
                <button value={m.id} onClick={this.deleteItem}>
                  Delete
                </button>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default BrowseClimbs
