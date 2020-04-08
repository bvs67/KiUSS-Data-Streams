import { GET_STRUC_REQUEST } from '../actions/StrucActions'
import { GET_STRUC_SUCCESS } from '../actions/StrucActions'
import { GET_STRUC_FAIL } from '../actions/StrucActions'
import { SET_CURRENT_NODE } from '../actions/StrucActions'

import { GET_SDASH_REQUEST } from '../actions/DashActions'
import { GET_SDASH_SUCCESS } from '../actions/DashActions'
import { GET_SDASH_FAIL } from '../actions/DashActions'


const initialState = {
  strucArray: [],
  CurrentNode: "0",
  isFetching: false, // изначально статус загрузки - ложь
  CurNodeId: "0",
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

    case GET_SDASH_REQUEST:
        return { ...state, isFetching: true };
  
    case GET_SDASH_SUCCESS:
        return { ...state, strucArray: [...action.payload.mas], CurrentNode: action.payload.row, isFetching: false };
    
    case GET_SDASH_FAIL:
        return { ...state, isFetching: false };
  
    default:
      return state
  }
}
