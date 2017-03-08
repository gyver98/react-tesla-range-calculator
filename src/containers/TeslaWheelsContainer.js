import TeslaWheels from '../components/TeslaWheels';
import { connect } from 'react-redux';
import { changeWheel } from '../actions'

const mapStateToProps = (state) => {
  return {
    value: state.config.wheels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHandler:(size) => {
      dispatch(changeWheel(size))
    }
  }
}

let TeslaWheelsContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaWheels)

export default TeslaWheelsContainer;