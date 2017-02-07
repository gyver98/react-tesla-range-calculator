import React from 'react';
import './TeslaBattery.css';
import TeslaCar from '../components/TeslaCar';

class TeslaBattery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wheelsize: 19  
    }
  }

  render() {
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar wheelsize={this.state.wheelsize} />
        <div className="tesla-battery__notice">
          <p>
            The actual amount of range that you experience will vary based 
            on your particular use conditions. See how particular use conditions 
            may affect your range in our simulation model.
          </p>
          <p>
            Vehicle range may vary depending on the vehicle configuration, 
            battery age and condition, driving style and operating, environmental 
            and climate conditions.
          </p>  
        </div>
      </form>
    );
  }
}

export default TeslaBattery;