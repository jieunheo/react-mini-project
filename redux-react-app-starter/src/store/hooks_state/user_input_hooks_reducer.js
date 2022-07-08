import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  changeValue: '',
  submitValue: ''
}

export const UserHooksReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.USER_INPUT_CHANGE:
        return {
          ...state,
          changeValue: action.payload
        }
      case ACTION_TYPES.USER_INPUT_SUBMIT:
        return {
          ...state,
          submitValue: action.payload
        }
      default:
        return state
    }
}
