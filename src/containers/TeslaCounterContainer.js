import TeslaCounter from '../components/TeslaCounter';
import { connect } from 'react-redux';

const counterDefaultVal = {
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    step: 10,
    min: -10,
    max: 40
  }
}

const mapStateToProps = (state) => {
  return {
    currentValue: state.config.speed
  }
}



let TeslaCounterContainer = connect(mapStateToProps, null)(TeslaCounter)

export default TeslaCounterContainer;