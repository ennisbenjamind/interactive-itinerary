import React from 'react';

const CheckOutDateField = (props) => {
  return (
    <label>{props.label}
      <input
        onChange = {props.handleChange}
        type="date"
        value={props.content}
      />
    </label>
  );
}

export default CheckOutDateField;
