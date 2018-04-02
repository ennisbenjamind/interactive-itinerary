import React from 'react';
import {Link} from 'react-router';

const EventTile = (props) => {
  return(
  <div className="cell auto">
    <div className="travel-feature-card-header{{#if type}} icon {{type}}-icon{{/if}}">
      <div className="row">
         <div className="medium-12 columns">
           <h5 className="travel-feature-card-subtitle">Event</h5>
            <div className="travel-feature-card-header-controls">
              <span><a href="#"><i className="fa fa-edit"></i></a></span>
              <span><a href="#"><i className="fa fa-remove"></i></a></span>
           </div>
        </div>
      </div>
    </div>


    <div className="travel-feature-card-details">
      <h6 className="travel-feature-card-date-range"></h6>
      <div className="row">
        <div className="small-12 medium-9 columns travel-feature-card-content">
          <div className="row">
            <div className="small-4 medium-2 columns">
              <img className="travel-feature-card-image" src="https://unsplash.it/600/600/?image=1081" alt=""></img>
            </div>
            <div className="small-8 medium-10 columns">
              <h6 className="travel-feature-card-title">{props.name}</h6>
              <p>{props.address}</p>
              <p>{props.details}</p>
              <p>Date: {props.date}</p>
              <p>Time: {props.time}</p>
            </div>
            <button onClick={props.handleClick}>Delete</button>
          </div>
        </div>

        <div className="small-12 medium-3 columns travel-feature-card-price">
          <h6>${props.expense}0</h6>
          <p className="travel-feature-card-price-subtext"></p>
        </div>
      </div>
    </div>
  </div>

)}

export default EventTile;
