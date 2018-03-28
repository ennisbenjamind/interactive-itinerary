import React, {Component} from 'react';
import {Router,browserHistory, Route, IndexRoute, Link} from 'react-router'
import NavBar from '../components/NavBar'
import EventTile from '../components/EventTile'


class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      messages: [],
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
      let events = body.events
      this.setState({events: events})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    console.log(this.state)
    let events = this.state.events.map(event=>{
      let date = new Date(event.date).toDateString()
      let time = new Date(event.time).toTimeString()
      return(
        <div className="callout">
          <EventTile
            key={event.id}
            name={event.name}
            address={event.address}
            expense={event.expense}
            details={event.details}
            date={date}
            time={time}
          />
        </div>
      )
    })
    return (
      <div>
        <NavBar
          key = {this.props.params.id}
          id = {this.props.params.id}
        />
        <Link to={`/trips/${this.props.params.id}/events/new`}>Add Event</Link>
        {events}
      </div>
    );
  }
}
export default EventsContainer;
