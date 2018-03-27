import React, {Component} from 'react';
import {Router,browserHistory, Route, IndexRoute, Link} from 'react-router'
import NavBar from '../components/NavBar'


class ExpensesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
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
        <h1> expenses</h1>
      </div>
    );
  }
}
export default ExpensesContainer;
