const config = (state, action) => {
  debugger;
  switch (action.type) {
    case 'CHANGE_CLIMATE':
      return Object.assign({}, state, {
        config:{
          climate:!state.config.climate
        }
      })
    
    default:
      return state = {
      carstats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      }
    }
  }
}

export default config;
