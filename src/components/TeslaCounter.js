import React from 'react';
import './TeslaCounter.css';

const TeslaCounter = (props) => (
  <div className="tesla-counter">
    <p className="tesla-counter__title">{'title'}</p>
    <div className="tesla-counter__container cf">
      <div className="tesla-counter__item" tabindex="0">
        <p className="tesla-counter__number">
          { 55 }
          <span>{ 'mph' }</span>
        </p>
        <div className="tesla-counter__controls" tabindex="-1">
          <button tabindex="-1"></button>
          <button tabindex="-1"></button>
        </div>
      </div >
    </div >
  </div >  
);

export default TeslaCounter;
