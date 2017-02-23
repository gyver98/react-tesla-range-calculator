//import { combineReducers } from 'redux';
import { getModelData } from '../services/BatteryService';
import updateConfig from './teslaRangeApp';

const initialState = {
  carstats:[
    {miles:246, model:"60"},
    {miles:250, model:"60D"},
    {miles:297, model:"75"},
    {miles:306, model:"75D"},
    {miles:336, model:"90D"},
    {miles:376, model:"P100D"}
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19
  }
}

const climateChangeState = {
  carstats:[
    {miles:267, model:"60"},
    {miles:273, model:"60D"},
    {miles:323, model:"75"},
    {miles:334, model:"75D"},
    {miles:366, model:"90D"},
    {miles:409, model:"P100D"}
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: false,
    wheels: 19
  }
}

const speedUpState = {
  carstats:[
    {miles:242, model:"60"},
    {miles:248, model:"60D"},
    {miles:292, model:"75"},
    {miles:303, model:"75D"},
    {miles:332, model:"90D"},
    {miles:371, model:"P100D"}
  ],
  config: {
    speed: 60,
    temperature: 20,
    climate: false,
    wheels: 19
  }
}

const speedDownState = {
  carstats:[
    {miles:267, model:"60"},
    {miles:273, model:"60D"},
    {miles:323, model:"75"},
    {miles:334, model:"75D"},
    {miles:366, model:"90D"},
    {miles:409, model:"P100D"}
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: false,
    wheels: 19
  }
}

const wheelChangeState = {
  carstats:[
    {miles:241, model:"60"},
    {miles:246, model:"60D"},
    {miles:291, model:"75"},
    {miles:300, model:"75D"},
    {miles:330, model:"90D"},
    {miles:358, model:"P100D"}
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 21
  }
}


describe('test reducer', () => {
  it('should handle initial stat', () => {
    expect(
      updateConfig(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle CHANGE_CLIMATE', () => {
    expect(
      updateConfig(initialState,{
        type: 'CHANGE_CLIMATE'
      })
    ).toEqual(climateChangeState)
  })
  
  it('should handle SPEED_UP', () => {
    expect(
      updateConfig(climateChangeState,{
        type: 'SPEED_UP',
        value: 55,
        step: 5,
        maxValue: 70
      })
    ).toEqual(speedUpState)
  })
  
  it('should handle SPEED_DOWN', () => {
    expect(
      updateConfig(speedUpState,{
        type: 'SPEED_DOWN',
        value: 60,
        step: 5,
        maxValue: 70
      })
    ).toEqual(speedDownState)
  })
  
  // it('should handle CHANGE_WHEEL', () => {
  //   expect(
  //     updateConfig(initialState,{
  //       type: 'CHANGE_WHEEL',
  //       value: 21
  //     })
  //   ).toEqual(wheelChangeState)
  // })

})

