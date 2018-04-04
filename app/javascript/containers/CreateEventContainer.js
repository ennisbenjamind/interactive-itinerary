import React, {Component} from 'react';
import {Router,browserHistory, Route, IndexRoute, Link} from 'react-router';
import NavBar from '../components/NavBar';
import NameField from '../components/NameField';
import ExpenseField from '../components/ExpenseField';
import DetailsField from '../components/DetailsField';
import TimeField from '../components/TimeField';
import DateField from '../components/DateField';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class CreateEventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      name: 'Trip to the Art Museum!',
      address:'Philadelphia Museum of Art, Benjamin Franklin Parkway, Philadelphia, PA, USA',
      expense:'0',
      details:'',
      time: '',
      date: '',
      lat: '',
      lng: '',
      trip_id: this.props.params.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleExpense = this.handleExpense.bind(this)
    this.handleDetails = this.handleDetails.bind(this)
    this.handleTime = this.handleTime.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleDate = this.handleDate.bind(this)
  }

  handleClearForm(event){
    event.preventDefault()
    this.setState({
      errors: [],
      name: '',
      address:'',
      expense:'',
      details:'',
      time: '',
      date: '',
      lat: '',
      lng: '',
      trip_id: this.props.params.id
    })
  }

  addNewEvent(submission){
    let trip_id = this.props.params.id
    fetch(`/api/v1/events`, {
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
        browserHistory.push(`/trips/${trip_id}/events`)
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
      details: this.state.datails,
      time: this.state.time,
      date: this.state.date,
      lat: latLng.lat,
      lng: latLng.lng,
      trip_id: this.state.trip_id
    }
    this.addNewEvent(formPayload)
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
    handleDetails (event){
      this.setState({details: event.target.value})
    }
    handleTime (event){
      this.setState({time: event.target.value})
    }
    handleDate (event){
      this.setState({date: event.target.value})
    }


  render() {
    console.log(this.state)
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
            label="Event name:"
            handleChange={this.handleName}
          />

          <PlacesAutocomplete
            inputProps={inputProps}
          />

          <DateField
            content={this.state.date}
            label="Date:"
            handleChange={this.handleDate}
          />

          <TimeField
            content={this.state.time}
            label="Time:"
            handleChange={this.handleTime}
          />

          <ExpenseField
            content={this.state.expense}
            label ={"Event expense (Optional):"}
            handleChange={this.handleExpense}
          />

          <DetailsField
            content={this.state.details}
            label = {"Event details (Optional):"}
            handleChange={this.handleDetails}
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

export default CreateEventContainer;
