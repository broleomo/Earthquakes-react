import React, { Component } from 'react';
import moment from 'moment';
import '../styles/App.css';
import EarthquakesList from "./EarthquakesList";
import EarthquakeInfo from "./EarthquakeInfo";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="title">
          <div className = "my-header">
          Earthquakes!
          </div>
        </div>
      <EarthquakeInfo/>
    <EarthquakesList/>

  </div>
    );
  }
}

export default App;
