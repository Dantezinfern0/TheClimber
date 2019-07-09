import React, { Component } from 'react'
import './Home.css'

export class Home extends Component {
  static displayName = Home.name
  constructor(props){
    super(props)
    this.state = {
      zero: 0
    }
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}
