import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import  WeatherData  from './components/WeatherData.jsx';
import { Counter } from './components/Counter';
import ClimbInputPage from './Pages/ClimbInputPage.jsx'
import BrowseClimbs from './Pages/BrowseClimbs.jsx'
import SingleClimb from './Pages/SingleClimb.jsx'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/climb' component={ClimbInputPage} />
        <Route exact path='/browse' component={BrowseClimbs} />
        <Route exact path='/counter' component={Counter} />
        <Route exact path='/weather-data' component={WeatherData} />
        <Route exact path='/:routeName' component={SingleClimb} />
      </Layout>
    );
  }
}

