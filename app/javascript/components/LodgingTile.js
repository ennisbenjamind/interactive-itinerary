import React from 'react';
import {Link} from 'react-router';

const LodgingTile = (props) => {
  return(

  <div className="callout">
      <div className="row">
         <div className="medium-12 columns">
            <div className="travel-feature-card-header-controls">
              <span><a href="#"><i className="fa fa-edit"></i></a></span>
              <span><a href="#"><i className="fa fa-remove"></i></a></span>
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
              <p>Check-in: {props.checkInDate} {props.checkInTime}</p>
              <p>Check-out: {props.checkOutDate} {props.checkOutTime}</p>
            </div>
          </div>
        </div>

        <div className="small-12 medium-3 columns travel-feature-card-price">
          <h6>${props.expense}0</h6>
          <p className="travel-feature-card-price-subtext"></p>
        </div>
        <button className="button tiny" onClick={props.handleClick}>Delete</button>
      </div>
    </div>
  </div>

)}

export default LodgingTile;
