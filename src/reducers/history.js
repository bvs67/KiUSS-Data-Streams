import { GET_HIST_REQUEST } from '../actions/HistoryActions'
import { GET_HIST_SUCCESS } from '../actions/HistoryActions'
import { GET_HIST_FAIL } from '../actions/HistoryActions'
import { TOGGLE_HIST_MODE } from '../actions/HistoryActions'
import { GET_HCOM_REQUEST } from '../actions/HistoryActions'
import { GET_HCOM_SUCCESS } from '../actions/HistoryActions'
import { GET_HCOM_FAIL } from '../actions/HistoryActions'
import { BEGIN_EDHIST_MODE } from '../actions/HistoryActions'
import { CANCEL_EDHIST_MODE } from '../actions/HistoryActions'
import { SVED_HIST_REQUEST } from '../actions/HistoryActions'
import { SVED_HIST_SUCCESS } from '../actions/HistoryActions'
import { SVED_HIST_FAIL } from '../actions/HistoryActions'
import { DEL_HIST_REQUEST } from '../actions/HistoryActions'
import { DEL_HIST_SUCCESS } from '../actions/HistoryActions'
import { DEL_HIST_FAIL } from '../actions/HistoryActions'
import { ADD_HIST_REQUEST } from '../actions/HistoryActions'
import { ADD_HIST_SUCCESS } from '../actions/HistoryActions'
import { ADD_HIST_FAIL } from '../actions/HistoryActions'

const initialState = {
  histArray: [[1,2,3,4],[5,6,7,8],[9,10,11,12]],
  isFetching: false, // изначально статус загрузки - ложь
  AddHistMode: false,
  EditHistMode: false,
  EditHistKey: 0,
  CurrentObj: 0,
}

//    return { ...state, CurrentObj: action.payload, isFetching: true };

export function historyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HIST_REQUEST:
      return { ...state, isFetching: true };

    case GET_HIST_SUCCESS:
      return { ...state, histArray: [...action.payload], isFetching: false };
  
    case GET_HIST_FAIL:
      return { ...state, isFetching: false };

    case TOGGLE_HIST_MODE:
      return { ...state, AddHistMode: action.payload };

    case GET_HCOM_REQUEST:
      return { ...state, isFetching: true };
    
    case GET_HCOM_SUCCESS:
      return { ...state, HCOMArray: [...action.payload], isFetching: false };
  
    case GET_HCOM_FAIL:
      return { ...state, isFetching: false };

    case BEGIN_EDHIST_MODE:
      return { ...state, EditHistMode: true, EditHistKey: action.payload };
  
    case CANCEL_EDHIST_MODE:
      return { ...state, EditHistMode: false, EditHistKey: action.payload };
  
    case SVED_HIST_REQUEST:
      return { ...state, EditHistKey: action.payload, isFetching: true };
     
    case SVED_HIST_SUCCESS:
      return { ...state, isFetching: false, EditHistMode: false };
  
    case SVED_HIST_FAIL:
      return { ...state, isFetching: false, EditHistMode: false };

    case DEL_HIST_REQUEST:
      return { ...state, isFetching: true };
  
    case DEL_HIST_SUCCESS:
      return { ...state, isFetching: false };
  
    case DEL_HIST_FAIL:
      return { ...state, isFetching: false };
    
    case ADD_HIST_REQUEST:
      return { ...state, isFetching: true };
   
    case ADD_HIST_SUCCESS:
      return { ...state, isFetching: false };
    
    case ADD_HIST_FAIL:
      return { ...state, isFetching: false };
    
    default:
      return state
  }
}
