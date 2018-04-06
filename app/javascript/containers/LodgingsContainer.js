import React, {Component} from 'react';
import {Router,browserHistory, Route, IndexRoute, Link} from 'react-router'
import NavBar from '../components/NavBar'
import LodgingTile from '../components/LodgingTile'


class LodgingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lodgings: [],
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
      let lodgings = body.lodgings
      this.setState({lodgings: lodgings})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  deleteLodging(id) {
    fetch(`/api/v1/lodgings/${id}`, {
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
  let lodgings = this.state.lodgings.map(lodging =>{
    let handleClick = () => { this.deleteLodging(lodging.id) }
    let check_in_date = new Date(lodging.check_in_date).toUTCString()
    let check_out_date = new Date(lodging.check_out_date).toUTCString()
    check_in_date = check_in_date.replace("00:00:00 GMT", "")
    check_out_date = check_out_date.replace("00:00:00 GMT", "")
    let check_in_time = new Date(lodging.check_in_time).toLocaleTimeString('en-us', {timeZone: 'UTC'})
    let check_out_time = new Date(lodging.check_out_time).toLocaleTimeString('en-us', {timeZone: 'UTC'})
    return (
      <div>
        <LodgingTile
          key={lodging.id}
          name={lodging.name}
          handleClick={handleClick}
          address={lodging.address}
          expense={lodging.expense}
          checkInDate={check_in_date}
          checkOutDate={check_out_date}
          checkInTime={check_in_time}
          checkOutTime={check_out_time}
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
      <Link className="button expanded" to={`/trips/${this.props.params.id}/lodgings/new`}>Add Lodging</Link>
      {lodgings}
    </div>
  );
}
}
export default LodgingsContainer;
