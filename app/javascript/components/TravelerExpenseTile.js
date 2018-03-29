import React from 'react';
import {Link} from 'react-router';

const TravelerExpenseTile = (props) => {
  return(
    <div>
      <li> {props.email} - ${props.expense} </li>
  </div>
)}

export default TravelerExpenseTile;
