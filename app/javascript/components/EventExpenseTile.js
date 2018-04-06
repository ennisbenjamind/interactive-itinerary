import React from 'react';
import {Link} from 'react-router';

const EventExpenseTile = (props) => {
  return(
    <div>
      {props.name} - ${props.expense}0
    </div>
  )}

export default EventExpenseTile;
