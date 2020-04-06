import { GET_HIST_REQUEST } from '../actions/HistoryActions'
import { GET_HIST_SUCCESS } from '../actions/HistoryActions'
import { GET_HIST_FAIL } from '../actions/HistoryActions'

const initialState = {
  histArray: [],     // [[1,2,3,4],[5,6,7,8],[9,10,11,12]],
  isFetching: false, // изначально статус загрузки - ложь
  CurrentObj: 0,
}

//    return { ...state, CurrentObj: action.payload, isFetching: true };

export function dashrightReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HIST_REQUEST:
      return { ...state, isFetching: true };

    case GET_HIST_SUCCESS:
      return { ...state, histArray: [...action.payload], isFetching: false };
  
    case GET_HIST_FAIL:
      return { ...state, isFetching: false };

    default:
      return state
  }
}
