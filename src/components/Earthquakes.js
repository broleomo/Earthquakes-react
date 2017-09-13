import React, {Component} from 'react';
import earthquakes from '../data/earthquakes'
export default class EarthquakeList extends Component {
  render(){
    return (
      <div className="col-sm-6">
      <div className ="card-block">
      <h4 className="card-title">{earthquakes.place}</h4>
      <h6 className="card-subtitle mb-2 text-muted">Magnitude {earthquakes.features.mag}</h6>
      <p classNam="card-text"> Coordinates: {earthquakes.geometry.coordinates}</p>
      <a href={earthquakes.url} className="card-link">USGS Event Link</a>
      </div>
    );
  }
}
