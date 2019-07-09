import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import WeatherData from './components/WeatherData.jsx'
import ClimbInputPage from './Pages/ClimbInputPage.jsx'
import BrowseClimbs from './Pages/BrowseClimbs.jsx'
import SingleClimb from './Pages/SingleClimb.jsx'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/input" component={ClimbInputPage} />
          <Route exact path="/browse" component={BrowseClimbs} />
          <Route exact path="/weather-data" component={WeatherData} />
          <Route exact path="/:id" component={SingleClimb} />
        </Switch>
      </Layout>
    )
  }
}
