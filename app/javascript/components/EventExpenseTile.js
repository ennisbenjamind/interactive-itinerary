import React from 'react';
import {Link} from 'react-router';

const EventExpenseTile = (props) => {
  return(
    <div>
      <li> {props.name} - ${props.expense}0 </li>
  </div>
)}

export default EventExpenseTile;
