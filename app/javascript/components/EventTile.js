import React from 'react';
import {Link} from 'react-router';

const EventTile = (props) => {
  return(

    <div className="timeline-item">
       <div className="timeline-icon">
         <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/96/iconmonstr-check-mark-18.png" class="" height="21" width="21" alt=""></img>
       </div>
       <div className={props.timelineContent}>
         <h2 className="timeline-content-date">{props.date} - {props.time}</h2>
         <ul>{props.name}</ul>
         <ul>${props.expense}</ul>
         <ul>{props.address}</ul>
         <ul>{props.details}</ul>
         <a className="button tiny" onClick={props.handleClick}>Delete</a>
       </div>
     </div>

)}

export default EventTile;
