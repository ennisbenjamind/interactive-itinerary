import React from 'react';
import {Link} from 'react-router';

const TripIndexTile = (props) => {
  return(
    <div className="columns small-6">
      <div className="card-info success">
        <div className="card-info-label">
          <div className="card-info-label-text">
            <Link to={`/trips/${props.id}`}>View</Link>
          </div>
        </div>
        <div className="card-info-content">
          <h3 className="lead">{props.name}</h3>
          <p>
            <ul>Begins: {props.start_date}</ul>
            <ul>Ends: {props.end_date}</ul>
          </p>
        </div>
      </div>
    </div>
  )}

  export default TripIndexTile;
