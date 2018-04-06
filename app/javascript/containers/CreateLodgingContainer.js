import React, {Component} from 'react';
import {Router,browserHistory, Route, IndexRoute, Link} from 'react-router'
import NavBar from '../components/NavBar'
import NameField from '../components/NameField';
import ExpenseField from '../components/ExpenseField';
import CheckInTimeField from '../components/CheckInTimeField';
import CheckOutTimeField from '../components/CheckOutTimeField';
import CheckInDateField from '../components/CheckInDateField';
import CheckOutDateField from '../components/CheckOutDateField';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class CreateLodgingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      name: 'AirBnb, Couchsurfing, Hotel?',
      address:'Philadelphia Marriott Downtown, Market Street, Philadelphia, PA, USA',
      expense:'0',
      details:'',
      lat: '',
      lng: '',
      check_in_time: '',
      check_out_time: '',
      check_in_date: '',
      check_out_date: '',
      trip_id: this.props.params.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleExpense = this.handleExpense.bind(this)
    this.handleCheckInDate = this.handleCheckInDate.bind(this)
    this.handleCheckInTime = this.handleCheckInTime.bind(this)
    this.handleCheckOutDate = this.handleCheckOutDate.bind(this)
    this.handleCheckOutTime = this.handleCheckOutTime.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  handleClearForm(event){
    event.preventDefault()
    this.setState({
      errors: [],
      name: '',
      address:'',
      expense:'0',
      check_in_time: '',
      check_out_time: '',
      check_in_date: '',
      check_out_date: '',
      lat: '',
      lng: '',
      trip_id: this.props.params.id
    })
  }

  addNewLodging(submission){
    let trip_id = this.props.params.id
    fetch(`/api/v1/lodgings`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(submission),
      headers: {
        'Content-Type': 'application/json',
        'Accept-Type': 'application/json'
      }
    })
    .then (response => {
      if (response.ok || response.status == 422) {
        return response
      } else {
        let errorMessage = `${response.status}`
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      if (body.errors) {
        this.setState({
          errors: body.errors
        });
      } else {
        browserHistory.push(`/trips/${trip_id}/lodgings`)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleSubmit = (event) => {
    event.preventDefault()
    geocodeByAddress(this.state.address)
    .then(results => getLatLng(results[0]))
    .then(latLng => {
    let formPayload = {
      name: this.state.name,
      address: this.state.address,
      expense: this.state.expense,
      check_in_time: this.state.check_in_time,
      check_out_time: this.state.check_out_time,
      check_in_date: this.state.check_in_date,
      check_out_date: this.state.check_out_date,
      lat: latLng.lat,
      lng: latLng.lng,
      trip_id: this.state.trip_id
    }
    this.addNewLodging(formPayload)
  })
  .catch(error => console.error('Error', error))
}

  handleName (event){
    this.setState({name: event.target.value})
  }
  onChange (address){
    this.setState({address: address})
  }
  handleExpense (event){
    this.setState({expense: event.target.value})
  }
  handleCheckInTime (event){
    this.setState({check_in_time: event.target.value})
  }
  handleCheckOutTime (event){
    this.setState({check_out_time: event.target.value})
  }
  handleCheckInDate (event){
    this.setState({check_in_date: event.target.value})
  }
  handleCheckOutDate (event){
    this.setState({check_out_date: event.target.value})
  }


  render() {
      const inputProps = {
        value: this.state.address,
        onChange: this.onChange,
      }
      let message = this.state.errors[0]
      
    return (
      <div>
        <NavBar
          key = {this.props.params.id}
          id = {this.props.params.id}
        />
        {message}
        <form className="new-article-form callout" onSubmit={this.handleSubmit}>

          <NameField
            content={this.state.name}
            label="Lodging:"
            handleChange={this.handleName}
          />

          <PlacesAutocomplete
            inputProps={inputProps}
          />

            <CheckInDateField
              content={this.state.check_in_date}
              label="Check-in Date:"
              handleChange={this.handleCheckInDate}
            />

            <CheckInTimeField
              content={this.state.check_in_time}
              label="Check-in Time:"
              handleChange={this.handleCheckInTime}
            />

            <CheckOutDateField
              content={this.state.check_out_date}
              label="Check-out Date:"
              handleChange={this.handleCheckOutDate}
            />

            <CheckOutTimeField
              content={this.state.check_out_time}
              label="Check-out Time:"
              handleChange={this.handleCheckOutTime}
            />

            <ExpenseField
              content={this.state.expense}
              label ={"Lodging expense (Optional):"}
              handleChange={this.handleExpense}
            />


            <div className="button-group">
              <button className="button" onClick={this.handleClearForm}>Clear</button>
              <input className="button" type="submit" value="Submit"  />
            </div>
          </form>
        </div>
      );
    }
  }
export default CreateLodgingContainer;
