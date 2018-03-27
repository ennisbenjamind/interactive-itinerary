import React, {Component} from 'react';
import {Router,browserHistory, Route, IndexRoute, Link} from 'react-router'
import NavBar from '../components/NavBar'


class LodgingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lodgings: [],
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
        <Link to={`/trips/${this.props.params.id}/lodgings/new`}>Add Lodging</Link>
        <h1> lodgings</h1>
      </div>
    );
  }
}
export default LodgingsContainer;
