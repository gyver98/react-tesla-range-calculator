import TeslaCar from '../components/TeslaCar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    wheelsize: state.config.wheels
  }
}

let TeslaCarContainer = connect(mapStateToProps, null)(TeslaCar)

export default TeslaCarContainer;