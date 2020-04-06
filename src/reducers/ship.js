import { GET_SHIP_REQUEST } from '../actions/ShipActions'
import { GET_SHIP_SUCCESS } from '../actions/ShipActions'
import { GET_SHIP_FAIL } from '../actions/ShipActions'
import { SET_CURRENT_SHIP } from '../actions/ShipActions'

const initialState = {
  shipArray: [],
  CurrentShip: 0,
  isFetching: false, // изначально статус загрузки - ложь
}

export function shipReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SHIP_REQUEST:
      return { ...state, isFetching: true };

    case GET_SHIP_SUCCESS:
      return { ...state, shipArray: [...action.payload], isFetching: false };
  
    case GET_SHIP_FAIL:
      return { ...state, isFetching: false };

    case SET_CURRENT_SHIP:
      return { ...state, CurrentShip: action.payload };

    default:
      return state
  }
}
