import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  return(
    <div>
      <ul className="side-nav">
        <li><Link to={`/trips/${props.id}/events`}> Events </Link></li>
        <li><Link to={`/trips/${props.id}/lodgings`}> Lodgings </Link></li>
        <li><Link to={`/trips/${props.id}/expenses`}> Expenses </Link></li>
      </ul>
    </div>
  )
}

export default NavBar;
