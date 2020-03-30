import { GET_MENU_POINT } from '../actions/MenuActions'

const initialState = {
  MenuPoint: 1,
}

//    return { ...state, CurrentObj: action.payload, isFetching: true };

export function menuReducer(state = initialState, action) {
  switch (action.type) {

    case GET_MENU_POINT:
      return { ...state, MenuPoint: action.payload };

    default:
      return state
  }
}
