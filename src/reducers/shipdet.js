import { GET_SDET_REQUEST } from '../actions/ShipDetActions'
import { GET_SDET_SUCCESS } from '../actions/ShipDetActions'
import { GET_SDET_FAIL } from '../actions/ShipDetActions'

const initialState = {
  shipdetArray: [],
  isFetching: false, // изначально статус загрузки - ложь
  Ship: 0,
}

export function shipdetReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SDET_REQUEST:
        return { ...state, isFetching: true };

    case GET_SDET_SUCCESS:
        return { ...state, shipdetArray: [...action.payload], isFetching: false };
  
    case GET_SDET_FAIL:
        return { ...state, isFetching: false };

    default:
        return state
  }
}
