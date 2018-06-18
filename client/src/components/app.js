import React, { Component } from 'react';
import EnterMessage from './enter_message'
import PageTitle from './page_title'
import GeoLocator from './geo_locator'


export default class App extends Component {



  render() {
    return (
      <div>
        <PageTitle />
        <GeoLocator />
        <EnterMessage />
        <a href='/auth/google'> Sign in with Google </a>
        <a href = '/api/logout'> Logout </a>
      </div>
    );
  }
}
