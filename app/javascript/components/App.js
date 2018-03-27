import React from 'react';
import {Router,browserHistory, Route, IndexRoute} from 'react-router'
import TripsIndexContainer from '../containers/TripsIndexContainer';
import TripShowContainer from '../containers/TripShowContainer';
import EventsContainer from '../containers/EventsContainer';
import LodgingsContainer from '../containers/LodgingsContainer';
import ExpensesContainer from '../containers/ExpensesContainer';
import CreateEventContainer from '../containers/CreateEventContainer';
import CreateLodgingContainer from '../containers/CreateLodgingContainer'


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={TripsIndexContainer} />
      <Route path='trips/:id' component={TripShowContainer} />
      <Route path='trips/:id/events' component={EventsContainer} />
      <Route path='trips/:id/lodgings' component={LodgingsContainer} />
      <Route path='trips/:id/expenses' component={ExpensesContainer} />
      <Route path='/trips/:id/events/new' component={CreateEventContainer} />
      <Route path='/trips/:id/lodgings/new' component={CreateLodgingContainer} />
    </Router>
  )
}
export default App;
