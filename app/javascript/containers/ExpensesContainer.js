import React, {Component} from 'react';
import {Router,browserHistory, Route, IndexRoute, Link} from 'react-router'
import NavBar from '../components/NavBar'
import EventExpenseTile from '../components/EventExpenseTile'
import LodgingExpenseTile from '../components/LodgingExpenseTile'
import TravelerExpenseTile from '../components/TravelerExpenseTile'



class ExpensesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total_expense: "",
      events: [],
      host: "",
      users: [],
      lodgings: []
    }
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
      let total_expense = body.trip.expenses
      let events = body.events
      let host = body.host
      let users = body.users
      let lodgings = body.lodgings
      this.setState({
        total_expense: total_expense,
        events: events,
        host: host,
        users: users,
        lodgings: lodgings
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let totalExpenses = this.state.total_expense
    let individualExpense = totalExpenses / (1 + this.state.users.length)
    let eventsExpense = this.state.events.map(event =>{
    return (
        <EventExpenseTile
          name = {event.name}
          expense = {event.expense}
        />
      )
    })
    let lodgings = this.state.lodgings.map(lodging =>{
    return (
        <LodgingExpenseTile
          name = {lodging.name}
          expense = {lodging.expense}
        />
      )
    })
    let dues = this.state.users.map(user => {
    return(
        <TravelerExpenseTile
          email = {user.email}
          expense = {individualExpense}
        />
      )
    })
    return (
      <div>
        <NavBar
          key = {this.props.params.id}
          id = {this.props.params.id}
        />
      <div className="columns medium-9 small-centered medium-centered large-centered">
        <ul className="pricing-table">
          <li className="title">Total:</li>
          <li className="price">${totalExpenses}0</li>
          <li className="title">Events:</li>
          <li className="description">{eventsExpense}</li>
          <li className="title">Lodgings:</li>
          <li className="description">{lodgings}</li>
          <li className="title">Dues:</li>
          <li className="description">Host- ${individualExpense}</li>
          <li className="description">{dues}</li>
        </ul>
      </div>
    </div>
    );
  }
}

export default ExpensesContainer;
