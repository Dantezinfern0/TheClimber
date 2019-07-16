import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          {' '}
          Made With <span aria-label="heart" role="img">🖤</span>
          at SDG
        </p>
      </div>
    )
  }
}

export default Footer
