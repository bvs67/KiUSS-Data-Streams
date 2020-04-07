import { SET_CURRENT_ID } from '../actions/GlobalActions'

const initialState = {
  CurrentId: 0,
}

export function globalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_ID:
      return { ...state, CurrentId: action.payload };
        
    default:
      return state
  }
}
