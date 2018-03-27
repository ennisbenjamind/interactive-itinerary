import React, {Component} from 'react';
import {Router,browserHistory, Route, IndexRoute, Link} from 'react-router';
import NavBar from '../components/NavBar';
import NameField from '../components/NameField';
import AddressField from '../components/AddressField';
import StateField from '../components/StateField';
import ZipField from '../components/ZipField';
import ExpenseField from '../components/ExpenseField';
import DetailsField from '../components/DetailsField';
import TimeField from '../components/TimeField';


class CreateEventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      name: '',
      address:'',
      state:'',
      zip:'',
      expense:'',
      details:'',
      time: ''
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleAddress = this.handleAddress.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleZip = this.handleZip.bind(this)
    this.handleExpense = this.handleExpense.bind(this)
    this.handleDetails = this.handleDetails.bind(this)
    this.handleTime = this.handleTime.bind(this)
  }

  handleClearForm(event){
    event.preventDefault()
    this.setState({
      errors: [],
      name: '',
      address:'',
      state:'',
      zip:'',
      expense:'',
      details:'',
      time: ''
    })
  }

    handleName (event){
      this.setState({name: event.target.value})
    }
    handleAddress (event){
      this.setState({address: event.target.value})
    }
    handleState (event){
      this.setState({state: event.target.value})
    }
    handleZip (event){
      this.setState({zip: event.target.value})
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


  render() {
    console.log(this.state)
    return (
      <div>
        <NavBar
          key = {this.props.params.id}
          id = {this.props.params.id}
        />
        <form className="new-article-form callout" onSubmit={this.handleSubmit}>

          <NameField
            content={this.state.name}
            label="Event name:"
            handleChange={this.handleName}
          />

          <TimeField
            content={this.state.time}
            label="When:"
            handleChange={this.handleTime}
          />

          <AddressField
            content={this.state.address}
            label = {"Address:"}
            handleChange={this.handleAddress}
          />

          <StateField
            content={this.state.state}
            label ={"State:"}
            handleChange={this.handleState}
          />

          <ZipField
            content={this.state.zip}
            label = {"Zipcode:"}
            handleChange={this.handleZip}
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
