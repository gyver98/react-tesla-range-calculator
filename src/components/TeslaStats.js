import React from 'react';
import './TeslaStats.css';

const TeslaStats = (props) => (
  <div className="tesla-stats">
    <ul>
      <li>
        <div className="tesla-stats-icon tesla-stats-icon--{{ stat.model | lowercase }}"></div>
        <p>{props.miles}</p>
      </li>
    </ul>
  </div >  
);

export default TeslaStats