import { GET_STRUC_REQUEST } from '../actions/StrucActions'
import { GET_STRUC_SUCCESS } from '../actions/StrucActions'
import { GET_STRUC_FAIL } from '../actions/StrucActions'
import { SET_CURRENT_NODE } from '../actions/StrucActions'

const initialState = {
  strucArray: [],
  CurrentNode: "0",
  isFetching: false, // изначально статус загрузки - ложь
}

export function strucReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STRUC_REQUEST:
      return { ...state, isFetching: true };

    case GET_STRUC_SUCCESS:
      return { ...state, strucArray: [...action.payload], isFetching: false };
  
    case GET_STRUC_FAIL:
      return { ...state, isFetching: false };

    case SET_CURRENT_NODE:
      return { ...state, CurrentNode: action.payload };

    default:
      return state
  }
}
