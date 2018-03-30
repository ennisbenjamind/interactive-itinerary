import React, {Component} from 'react';
import {Router,browserHistory, Route, IndexRoute, Link} from 'react-router'
import NavBar from '../components/NavBar'
import EventTile from '../components/EventTile'
import timezone from "google-timezone-api"


class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      messages: []
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

  deleteEvent(id) {
    fetch(`/api/v1/events/${id}`, {
      method: 'DELETE',
      credentials: 'same-origin'
    }).then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`
          let error = new Error(errorMessage)
          throw(error)
        }
      }
    )
    .then(body => {
      browserHistory.push(`/trips/${this.props.params.id}/events`)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {

    console.log(this.state)
    let events = this.state.events.map(event=>{
      // timezone( {
      // location: `${event.lat},${event.lng}`})
      // .then( function( result ) {console.log( result );
      // })
      // .catch( function( err ) {console.log( err );
      // });
      let handleClick = () => { this.deleteEvent(event.id) }
      let date = new Date(event.date).toDateString()
      let time = new Date(event.time).toLocaleTimeString('en-us', {timeZone: 'UTC'})
      return(
        <div className="callout">
          <EventTile
            key={event.id}
            id={event.id}
            name={event.name}
            handleClick={handleClick}
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
