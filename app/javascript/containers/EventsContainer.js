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
      this.componentDidMount()
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    let count = 0
    let timelineContent;
    let events = this.state.events.map(event=>{
      count += 1
      if (count % 2) {
        timelineContent = "timeline-content"
      } else {
        timelineContent = "timeline-content right"
      }
      let handleClick = () => { this.deleteEvent(event.id) }
      let date = new Date(event.date).toUTCString()
      date = date.replace("00:00:00 GMT", "")
      let time = new Date(event.time).toLocaleTimeString('en-us', {timeZone: 'UTC'})
      return(
        <div className="timeline">
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
            timelineContent={timelineContent}
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
        <Link className="button expanded" to={`/trips/${this.props.params.id}/events/new`}>Add Event</Link>
        <div className="timeline">
        {events}
        </div>
      </div>
    );
  }
}
export default EventsContainer;
