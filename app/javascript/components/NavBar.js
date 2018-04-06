import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  return(
    <ul className="menu align-center submenu-hover-lines">
      <li><Link to={`/trips/${props.id}/events`}> Events </Link></li>
      <li><Link to={`/trips/${props.id}/lodgings`}> Lodgings </Link></li>
      <li><Link to={`/trips/${props.id}/expenses`}> Expenses </Link></li>
      <li><Link to={`/trips/${props.id}/map`}> Map </Link></li>
    </ul>
  )
}

export default NavBar;
