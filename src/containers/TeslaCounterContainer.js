import TeslaCounter from '../components/TeslaCounter';
import { connect } from 'react-redux';
import { speedUp, speedDown } from '../actions'

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
    currentValue: state.config.speed,
    initValues: counterDefaultVal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSpeedUpClick:(value) => {
      dispatch(speedUp(value))
    },
    onSpeedDownClick:(value) => {
      dispatch(speedDown(value))
    }
  }
}

let TeslaCounterContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaCounter)

export default TeslaCounterContainer;