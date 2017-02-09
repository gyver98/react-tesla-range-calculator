import React from 'react';
import './TeslaWheels.css';

function LabelLists() {
  const sizes = [19, 21];
  const LabelItems = sizes.map(size => (
    <label className={`tesla-wheels__item tesla-wheels__item--${size}`}>
      <input
        type="radio"
        name="wheelsize"
        value="size"
        checked="value === size" />
      <p>
        {size}
      </p>
    </label> 
    )
  );
  return (
    <div>
      {LabelItems}
    </div>
  );
}

const TeslaWheels = (props) => (
  <div className="tesla-wheels__component">
    <p className="tesla-wheels__title">Wheels</p>
    <div className="tesla-wheels__container cf">
      <LabelLists />
    </div>
  </div>
);

export default TeslaWheels;