import React from 'react';
import './TeslaCounter.css';

class TeslaCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
      direction: ''
    }
  }
  
  componentWillReceiveProps(nextProps) {
    const { currentValue, initValues } = nextProps;
    if (this.props.currentValue !== nextProps.currentValue) {
      const direction = this.props.currentValue < nextProps.currentValue ? 'increase' : 'decrese'
      this.setState({
        animate: true,
        direction
      });
      
      setTimeout(
        () => {
          this.setState({
            
            animate: false
          })
        }, 500
      );
      return;  
    } 
    
  }
  
    
  
  render() {
    const { initValues, animationEffect, currentValue, increment, decrement } = this.props;
    const { animate, direction } = this.state;
    const animation = animate
                      ? (direction==='increase'? 'flip-in-hor-top' : 'flip-in-hor-bottom')
                      : '';
    // this.setState({
    //   animate: false
    // })  
    
    return (
      <div className="tesla-counter">
        <p className="tesla-counter__title">{initValues.title}</p>
        <div className="tesla-counter__container cf">
          <div className="tesla-counter__item" tabIndex="0">
            <div className={`${animation}`} >
              <p className="tesla-counter__number">
                {currentValue}
                <span>{initValues.unit}</span>
              </p>
            </div>
            <div className="tesla-counter__controls" tabIndex="-1">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  increment(currentValue)
                }}
                disabled={currentValue >= initValues.max}
                tabIndex="-1">
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  decrement(currentValue)
                }}
                disabled={currentValue <= initValues.min}
                tabIndex="-1">
              </button>
            </div>
          </div >
        </div >
      </div >
    );
  }
}

TeslaCounter.propTypes = {
  currentValue: React.PropTypes.number,
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func,
  initValues: React.PropTypes.object
}

export default TeslaCounter;

/*const TeslaCounter = (props) => (
  <div className="tesla-counter">
    <p className="tesla-counter__title">{props.initValues.title}</p>
    <div className="tesla-counter__container cf">
      <div className="tesla-counter__item" tabIndex="0">
        <div className={`${!props.animationEffect ? '':'tesla-counter__animation--active'}`}>
        <p className="tesla-counter__number">
          { props.currentValue }
          <span>{ props.initValues.unit }</span>
        </p>
        </div>
        <div className="tesla-counter__controls" tabIndex="-1">
          <button 
            onClick={(e) => {
              e.preventDefault();
              props.increment(props.currentValue)}} 
            disabled={props.currentValue >= props.initValues.max} 
            tabIndex="-1">
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              props.decrement(props.currentValue)}} 
            disabled={props.currentValue <= props.initValues.min} 
            tabIndex="-1">
          </button>
        </div>
      </div >
    </div >
  </div >  
);

TeslaCounter.propTypes = {
  currentValue: React.PropTypes.number,
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func,
  initValues: React.PropTypes.object
}

export default TeslaCounter;*/
