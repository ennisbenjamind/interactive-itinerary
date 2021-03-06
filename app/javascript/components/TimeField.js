import React from 'react';

const TimeField = (props) => {
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

export default TimeField;
