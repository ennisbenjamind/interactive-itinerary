import React, {Component} from 'react';
import {Router, browserHistory, Route, IndexRoute, Link} from 'react-router'
import TripIndexTile from '../components/TripIndexTile'


class TripsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      message: ""
    }
  }
  
  componentDidMount () {
    fetch('/api/v1/trips', {
      credentials: 'same-origin'
    })
    .then (response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let trips = body.trips
      this.setState({trips: trips})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    let trips = this.state.trips.map(trip => {
      let start_date = new Date(trip.start_date).toUTCString()
      let end_date = new Date(trip.end_date).toUTCString()
      start_date = start_date.replace("00:00:00 GMT", "")
      end_date = end_date.replace("00:00:00 GMT", "")
      return(
        <TripIndexTile
          key = {trip.id}
          id = {trip.id}
          name = {trip.name}
          image_link = {trip.image_link}
          start_date = {start_date}
          end_date = {end_date}
        />
      )
    })

    return (
      <div className="row large-up-4 small-up-2">
        {trips}
      </div>
    )
  }
}

export default TripsIndexContainer;
