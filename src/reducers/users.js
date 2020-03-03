import { GET_USERS_REQUEST } from '../actions/UsersActions'
import { GET_USERS_SUCCESS } from '../actions/UsersActions'
import { GET_USERS_FAIL } from '../actions/UsersActions'

const initialState = {
  dataArray: [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]],
  isFetching: false, // изначально статус загрузки - ложь
}

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, isFetching: true };

    case GET_USERS_SUCCESS:
      return { ...state, dataArray: [...action.payload], isFetching: false };
  
    case GET_USERS_FAIL:
      return { ...state, isFetching: false };

    default:
      return state
  }
}
