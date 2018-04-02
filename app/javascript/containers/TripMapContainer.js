import React, {Component} from 'react';
import {Router,browserHistory, Route, IndexRoute, Link} from 'react-router'
import NavBar from '../components/NavBar';
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZW5uaXNiZW5qYW1pbmQiLCJhIjoiY2pmaWZ0OGJlMGM1ZjMzdW1pZTl2ZG94ayJ9.rEUQt9lWjAv8wUmCy3U2iQ"
});

class TripMapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      lodgings: [],
      selectedName: '',
      selectedAddress: '',
      center: [0,0]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    let tripId = this.props.params.id
    fetch(`/api/v1/trips/${tripId}`, {
      credentials: 'same-origin'
    })
    .then(response => {
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
      let events = body.events
      let lodgings = body.lodgings
      this.setState({
        events: events,
        lodgings: lodgings,
        selectedName: lodgings[0].name,
        selectedAddress: lodgings[0].address,
        center: [lodgings[0].lng, lodgings[0].lat]
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleClick(event){
    this.setState({
      selectedName: event.feature.properties.name,
      selectedAddress: event.feature.properties.address
    })
  }

  render() {
    let events = this.state.events.map(event => {
      let properties = {name: event.name, address: event.address}
      return(
        <Feature
          key= {event.id}
          coordinates={[event.lng,event.lat]}
          onClick={this.handleClick}
          properties={properties}
        />
      )
    })
    let lodgings = this.state.lodgings.map(lodging => {
      let properties = {name: lodging.name, address: lodging.address}
      return (
        <Feature
          key = {lodging.id}
          onClick={this.handleClick}
          coordinates={[lodging.lng,lodging.lat]}
          properties={properties}
        />
      )
    })

    return (
      <div>
        <Map
          center={this.state.center}
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}>
          <NavBar
            key = {this.props.params.id}
            id = {this.props.params.id}
          />
          <h1>{this.state.selectedName}</h1>
          <p>{this.state.selectedAddress}</p>
          <Layer
            type="symbol"
            id="events"
            layout={{
              "icon-image": "star-15",
              "text-field": "Activity",
              "text-offset": [0, 0.6],
              "text-anchor": "top"
            }}>
            {events}
          </Layer>
          <Layer
            type="symbol"
            id="lodgings"
            layout={{
              "icon-image": "harbor-15",
              "text-field": "Lodging",
              "text-offset": [0, 0.6],
              "text-anchor": "top"
            }}>
            {lodgings}
          </Layer>
        </Map>
      </div>
    );
  }
}

export default TripMapContainer;
