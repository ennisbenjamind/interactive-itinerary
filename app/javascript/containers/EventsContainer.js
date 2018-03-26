import React, {Component} from 'react';
import {Router,browserHistory, Route, IndexRoute, Link} from 'react-router'
import NavBar from '../components/NavBar'


class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      messages: [],
    }
  }

  render() {

  return (
    <div>
    <NavBar
      key = {this.props.params.id}
      id = {this.props.params.id}
    />
    <h1> events</h1>
  </div>
  );
}
}
export default EventsContainer;
