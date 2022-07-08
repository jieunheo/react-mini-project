import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  props1: false,
  props2: false
}

export const HooksReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.SUCCESS:
        return {
          ...state,
          props1: true,
          props2: true
        }
      case ACTION_TYPES.FAILURE:
        return {
          ...state,
          props1: false,
          props2: false
        }
      default:
        return state
    }
}
