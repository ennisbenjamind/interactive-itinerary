import React from 'react';
import {Link} from 'react-router';

const TripIndexTile = (props) => {
  return(
    <div className="featured-image-block column">
      <Link to={`/trips/${props.id}`}>
      <img src={props.image_link} />
      <p className="text-center featured-image-block-title">{props.name}</p>
      <p className="text-center featured-image-block-title">{props.start_date}</p>
      <p className="text-center featured-image-block-title">{props.end_date}</p>
    </Link>
  </div>
)}



export default TripIndexTile;
