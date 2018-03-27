import React from 'react';

const DetailsField = (props) => {
  return (
    <label>{props.label}
      <textarea
        onChange = {props.handleChange}
        type='text'
        value={props.content}
      />
    </label>
  );
}

export default DetailsField;