import React, { Component } from 'react'
import './Home.css'
import auth from '../auth'
import Footer from './Footer.jsx'

export class Home extends Component {
  static displayName = Home.name
  constructor(props) {
    super(props)
    this.state = {
      url:
        'https://lh3.googleusercontent.com/5vEIp3JJHmI0DExaMqn9A3SIijFWy0gJMmJbg8BtEgkuDqik9wxfqS7FBh-bYmL7w2tWCRc92SAl7GMgXl3YCl7KMWP8YyKN7gFs5_Q_qMQE12nLOEqEEyCu8jEqp7HZkc4VC62rAq_g59O1CEmREIjDaC-7r9S12pWRFae6hjreO1mkGKFh73rM-gD_WD1fA6wXg0cy1dTPKYnh_4XOF18ZN68ZrrgV_LPKKGoW4wK9gm3nGr-orEmFY8oAcolZuNOXogqy6rlgSMzJZtokuHHhCHVOK2VTQEzLXMqreBCxnaQImhLV95-RmGWTMdxJueyhmEE4iWu0Vgk70zOA92sZVqRYPx9z7LJfkKy6J4jGuuxbGaIwR68xvbmx88kKCSTxab7guzK4uc00JdaUqUwiFywNQL1dDbCarrBjMKHiETf7vJVj8qc-OSeENxBL3aa6x_uNcL3Ww6DGXryzV0Cg9iu58OgjEc4eO1e1JenNR7QI2SIsYfbKFXO-HzZZXeFWgnGb0nhOeT_HqC-qojzlwfWpySOpAyAHh0XZbX1Ejtgg4RqhsRbWOSrt7cbR3JD9yNMLMIm-KRxwMUNsbpis56jwA1ikXG0Q0ufy0QgKlG94PrXoa8m2wufBapgUOtv5dr6cLtmLjk-tve9M2dBwrc3XKTg=w970-h1292-no'
    }
  }
  // componentWillMount() {
  //   if (auth.isAuthenticated()) {
  //     // axios.defaults.headers.common = {
  //     //   Authorization: auth.authorizationHeader()
  //     // }
  //   } else {
  //     window.location.href = '/login'
  //   }
  // }

  render() {
    return (
      <div>
        <img alt="Dante" className="home-page-image" src={this.state.url} />
        <Footer />
      </div>
    )
  }
}
