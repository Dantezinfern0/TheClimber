import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './BrowseClimbs.css'

class BrowseClimbs extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      info: []

    })
  }

  componentDidMount(){
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
            <Link key={m.id} to={`/browse/${m.id}`}>
              <li> {m.routeName} </li>
            </Link>
          )
        })}
      </ul>
      </div>
    );
  }
}

export default BrowseClimbs;


