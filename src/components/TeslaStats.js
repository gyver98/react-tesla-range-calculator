import React from 'react';
import './TeslaStats.css';

const TeslaStats = (props) => {
  const carstats = props.carstats.map((stat) => (
    <li key={stat.model}>
      <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
      <p>{stat.miles}</p>
    </li>
  ));
  return (
    <div className="tesla-stats">
    <ul>
      {carstats}  
    </ul>
  </div>
  )
    
};

export default TeslaStats