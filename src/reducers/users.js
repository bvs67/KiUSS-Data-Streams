import { GET_USERS_REQUEST } from '../actions/UsersActions'
import { GET_USERS_SUCCESS } from '../actions/UsersActions'
import { GET_USERS_FAIL } from '../actions/UsersActions'
import { GET_USER_REQUEST } from '../actions/UsersActions'
import { GET_USER_SUCCESS } from '../actions/UsersActions'
import { GET_USER_FAIL } from '../actions/UsersActions'

const initialState = {
  dataArray: [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]],
  userArray: [],
  isFetching: false, // изначально статус загрузки - ложь
  Node: 0,
}

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
        return { ...state, isFetching: true };

    case GET_USERS_SUCCESS:
        return { ...state, dataArray: [...action.payload], isFetching: false };
  
    case GET_USERS_FAIL:
        return { ...state, isFetching: false };

    case GET_USER_REQUEST:
        return { ...state, isFetching: true };
  
    case GET_USER_SUCCESS:
        return { ...state, userArray: [...action.payload], isFetching: false };
    
    case GET_USER_FAIL:
        return { ...state, isFetching: false };
  
    default:
        return state
  }
}
