import { SET_CURRENT_ID } from '../actions/GlobalActions'
import { SET_CURNODE_ID } from '../actions/GlobalActions'

const initialState = {
  CurrentId: 0,
  CurNodeId: "0",
}

export function globalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_ID:
      return { ...state, CurrentId: action.payload };
        
    case SET_CURNODE_ID:
      return { ...state, CurNodeId: action.payload };
        
    default:
      return state
  }
}
