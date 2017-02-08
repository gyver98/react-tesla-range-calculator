import React from 'react';
import './TeslaClimate.css';

const limit = 10;
const value = 20;
const TeslaClimate = (props) => (
  <div className="tesla-climate">
    <label
      className="tesla-climate__item tesla-climate__item--active"
      >
      <p>{limit ? 'ac' : 'heat'} {value ? 'on' : 'off'}</p>
      <i className="tesla-climate__icon"></i>
      <input
        type="checkbox"
        name="climate"
        checked={value}
      />
    </label>
  </div>
);

export default TeslaClimate;