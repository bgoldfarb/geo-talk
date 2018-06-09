import React, { Component } from 'react';
import SearchBar from './search_bar'
import PageTitle from './page_title'
import GeoLocator from './geo_locator'


export default class App extends Component {



  render() {
    return (
      <div>
        <PageTitle />
        <GeoLocator />
        <SearchBar />
      </div>
    );
  }
}
