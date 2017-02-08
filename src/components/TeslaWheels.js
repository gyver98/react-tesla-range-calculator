import React from 'react';
import './TeslaWheels.css';

const size = 19;
const TeslaWheels = (props) => (
  <div className="tesla-wheels__component">
    <p className="tesla-wheels__title">Wheels</p>
    <div className="tesla-wheels__container cf">
      <label className="tesla-wheels__item tesla-wheels__item--{size}">
        <input
          type="radio"
          name="wheelsize"
          value="size"
          checked="value === size" />
        <p>
          {size}
        </p>
      </label>
    </div>
  </div>
);

export default TeslaWheels;