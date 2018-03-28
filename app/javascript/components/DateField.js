import React from 'react';

const DateField = (props) => {
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

export default DateField;
