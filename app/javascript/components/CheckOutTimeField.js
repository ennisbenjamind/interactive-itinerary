import React from 'react';

const CheckOutTimeField = (props) => {
  return (
    <label>{props.label}
      <input
        onChange = {props.handleChange}
        type="time"
        value={props.content}
      />
    </label>
  );
}

export default CheckOutTimeField;
