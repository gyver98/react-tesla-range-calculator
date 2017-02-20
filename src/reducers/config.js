const config = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_CLIMATE':
      return Object.assign({}, state, {
        config: !config.climate
      })
    
    default:
      return state
  }
}

export default config;
