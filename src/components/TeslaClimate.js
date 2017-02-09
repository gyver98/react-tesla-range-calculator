import React from 'react';
import './TeslaClimate.css';

//const limit = 10;
const value = true;
//const onChange = (value)
const TeslaClimate = (props) => (
  <div className="tesla-climate">
    <label
      className={`tesla-climate__item ${props.value ? 'tesla-climate__item--active' : '' }  ${!props.limit ? 'tesla-heat':''}`}
    >
      <p>{props.limit ? 'ac' : 'heat'} {props.value ? 'on' : 'off'}</p>
      <i className="tesla-climate__icon"></i>
      <input
        type="checkbox"
        name="climate"
        checked={value}
        onChange={() => {props.onChangeClimate()}}
      />
    </label>
  </div>
);

export default TeslaClimate;