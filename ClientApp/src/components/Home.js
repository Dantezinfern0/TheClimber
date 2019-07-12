import React, { Component } from 'react'
import './Home.css'
import axios from 'axios'
import auth from '../auth'

export class Home extends Component {
  static displayName = Home.name
  constructor(props){
    super(props)
    this.state = {
      url: 'https://lh3.googleusercontent.com/spIEvsn-ZW7ugDoernxZCm0Ap8ifWnCjlN9-qDQZCeebrIUH5h7BNaAVxZXeFNbizKbeefrGByPh6WQEYaaUWqzIOsLQNLQG8Uq-9asTzPAr6JF597UsplX0YDDSphWibw8tk9ea7HW1nTjruKnlovOsbh-01glwIHHpezXm1ypPaljBYJl_ne-HPVMDv2dhRjDJdWTOS9I7rnZyC_RO-FwYhagya3d7-i13ovGaZafUp-gRFdH3EZlY2CTzYiPFP66oKbxG9v748fVWcEjjrcwHwt5c2s_89jiB0fb-33E3iUeA-V7-Q_bVudp_I23OxNpkM6OMl9Kvc5Ry6iTCL18AoCtKi5M-Z6U83GxDfPlxIBScGhEwQIZR1VofURQYzf4t5f1ZG46gpIaUJXrjvhuHM1nbqjP8FWJxlz-SLEIqCTZjsgVgQRXZyDvDP3wKti3fW0izmi_4anUPh6uQ-NkvjquT9ATUpLNQg-hsnUTl1-uAA7l2bOHCCHQ5vAeXZYnNljz1Y1g2-hM9YOhn8muB-wZIh85Ud_EECR3lmK2kqhCrIe97Xm6FWi2X1L7r29DP9L3So4I5i8u7ordqeEv0xwUF57CYbWgW0p3NEx8jaf7YSZ47PvNxE7G0eVvA1MbQmap9AdT7fliNbhwA5B4GlOuC8NQ=w1492-h1458-no'
    }
  }
 

  render() {
    return (
      <div>
        <img alt="Dante" className="home-page-image" src={this.state.url} />
      </div>
    )
  }
}
