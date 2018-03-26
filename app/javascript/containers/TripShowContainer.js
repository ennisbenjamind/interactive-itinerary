import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import EventsContainer from '../containers/EventsContainer'

class TripShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

  return (
    <div>
    <NavBar
    key = {this.props.params.id}
    id = {this.props.params.id}
  />

  </div>
  );
}
}

export default TripShowContainer;
