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


  render() {
    console.log(this.state)
    let lodgings = this.state.lodgings.map(lodging =>{
      let check_in_date = new Date(lodging.check_in_date).toDateString()
      let check_out_date = new Date(lodging.check_out_date).toDateString()
      let check_in_time = new Date(lodging.check_in_time).toTimeString()
      let check_out_time = new Date(lodging.check_out_time).toTimeString()
      return (
        <div className="callout">
          <LodgingTile
            key={lodging.id}
            name={lodging.name}
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
        <Link to={`/trips/${this.props.params.id}/lodgings/new`}>Add Lodging</Link>
        {lodgings}
      </div>
    );
  }
}
export default LodgingsContainer;
