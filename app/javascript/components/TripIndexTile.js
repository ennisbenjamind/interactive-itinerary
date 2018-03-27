import React from 'react';
import {Link} from 'react-router';

const TripIndexTile = (props) => {
  return(
    <div className="featured-image-block column">
      <Link to={`/trips/${props.id}`}>
      <img src={'https://www.roughguides.com/wp-content/uploads/2014/06/Philippines_Itinerary.png'} />
        <p className="text-center featured-image-block-title">{props.name}</p>
          <p className="text-center featured-image-block-title">Begins: {props.start_date}</p>
            <p className="text-center featured-image-block-title">Ends: {props.end_date}</p>
      </Link>
  </div>
)}

export default TripIndexTile;