import { GET_OBJ_REQUEST } from '../actions/PageActions'
import { GET_OBJ_SUCCESS } from '../actions/PageActions'
import { GET_OBJ_FAIL } from '../actions/PageActions'

const initialState = {
  OBJArray: [],
  isFetching: false, // изначально статус загрузки - ложь
}

export function objReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OBJ_REQUEST:
      return { ...state, isFetching: true };

    case GET_OBJ_SUCCESS:
      return { ...state, OBJArray: [...action.payload], isFetching: false };
  
    case GET_OBJ_FAIL:
      return { ...state, isFetching: false };

    default:
      return state
  }
}
