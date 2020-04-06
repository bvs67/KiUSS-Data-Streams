import { GET_OBJ_REQUEST } from '../actions/ObjActions'
import { GET_OBJ_SUCCESS } from '../actions/ObjActions'
import { GET_OBJ_FAIL } from '../actions/ObjActions'

import { SET_CURRENT_ROW } from '../actions/ObjActions'

const initialState = {
  OBJArray: [],
  isFetching: false, // изначально статус загрузки - ложь
  CurrentRow: 0,
}

export function dashleftReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OBJ_REQUEST:
      return { ...state, isFetching: true };

    case GET_OBJ_SUCCESS:
      return { ...state, OBJArray: [...action.payload], CurrentRow: action.payload[0].id, isFetching: false };
  
    case GET_OBJ_FAIL:
      return { ...state, isFetching: false };

    case SET_CURRENT_ROW:
      return { ...state, CurrentRow: action.payload };

    default:
      return state
  }
}
