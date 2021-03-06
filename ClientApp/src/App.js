import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import WeatherData from './components/WeatherData.jsx'
import ClimbInputPage from './Pages/ClimbInputPage.jsx'
import BrowseClimbs from './Pages/BrowseClimbs.jsx'
import SingleClimb from './Pages/SingleClimb.jsx'
import SingleRoute from './Pages/SingleRoute.jsx'
import ToDo from './Pages/ToDo.jsx'
import MountainProject from './Pages/MountainProject.jsx'
import auth from './auth'


export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/login" render={() => auth.login()} />
          <Route exact path="/" component={Home} />
          <Route exact path="/input" component={ClimbInputPage} />
          <Route exact path="/browse" component={BrowseClimbs} />
          <Route exact path="/weather-data" component={WeatherData} />
          <Route exact path="/browse/:id" component={SingleClimb} />
          <Route exact path="/route/:id" component={SingleRoute} />
          <Route exact path="/todo" component={ToDo} />
          <Route exact path="/record" component={MountainProject} />
          <Route
            path="/logout"
            render={() => {
              auth.logout()
              return <p />
            }}
          />
          <Route
            path="/callback"
            render={() => {
              auth.handleAuthentication(() => {
                // NOTE: Uncomment the following lines if you are using axios
                //
                // Set the axios authentication headers
                // axios.defaults.headers.common = {
                //   Authorization: auth.authorizationHeader()
                // }
              })
              return <p />
            }}
          />
        </Switch>
      </Layout>
    )
  }
}
