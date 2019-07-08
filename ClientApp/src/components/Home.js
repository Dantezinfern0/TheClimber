import React, { Component } from 'react'

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
        <p>Total vertical feet climbed: 23,403ft</p>
        <p>Routes Climbed: 1323</p>
        <p>Statistics and Stuff</p>
      </div>
    )
  }
}
