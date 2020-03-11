import { GET_OBJ_REQUEST } from '../actions/PageActions'
import { GET_OBJ_SUCCESS } from '../actions/PageActions'
import { GET_OBJ_FAIL } from '../actions/PageActions'
import { DEL_OBJ_REQUEST } from '../actions/PageActions'
import { DEL_OBJ_SUCCESS } from '../actions/PageActions'
import { DEL_OBJ_FAIL } from '../actions/PageActions'
import { TOGGLE_ADD_MODE } from '../actions/PageActions'
import { BEGIN_EDIT_MODE } from '../actions/PageActions'
import { CANCEL_EDIT_MODE } from '../actions/PageActions'
import { SVED_OBJ_REQUEST } from '../actions/PageActions'
import { SVED_OBJ_SUCCESS } from '../actions/PageActions'
import { SVED_OBJ_FAIL } from '../actions/PageActions'
import { ADD_OBJ_REQUEST } from '../actions/PageActions'
import { ADD_OBJ_SUCCESS } from '../actions/PageActions'
import { ADD_OBJ_FAIL } from '../actions/PageActions'
import { GET_GRCOMP_REQUEST } from '../actions/PageActions'
import { GET_GRCOMP_SUCCESS } from '../actions/PageActions'
import { GET_GRCOMP_FAIL } from '../actions/PageActions'
import { SET_CURRENT_ROW } from '../actions/PageActions'

const initialState = {
  AddMode: false,
  EditMode: false,
  OBJArray: [],
  isFetching: false, // изначально статус загрузки - ложь
  EditKey: 0,
  GRCOMPArray: [],
  CurrentRow: 0,
}

export function objReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OBJ_REQUEST:
      return { ...state, isFetching: true };

    case GET_OBJ_SUCCESS:
      return { ...state, OBJArray: [...action.payload], CurrentRow: action.payload[0].id, isFetching: false };
  
    case GET_OBJ_FAIL:
      return { ...state, isFetching: false };

    case DEL_OBJ_REQUEST:
      return { ...state, isFetching: true };

    case DEL_OBJ_SUCCESS:
      return { ...state, isFetching: false };

    case DEL_OBJ_FAIL:
      return { ...state, isFetching: false };
  
    case TOGGLE_ADD_MODE:
      return { ...state, AddMode: action.payload };

    case SET_CURRENT_ROW:
      return { ...state, CurrentRow: action.payload };

    case BEGIN_EDIT_MODE:
      return { ...state, EditMode: true, EditKey: action.payload };

    case CANCEL_EDIT_MODE:
      return { ...state, EditMode: false, EditKey: action.payload };
  
    case SVED_OBJ_REQUEST:
      return { ...state, EditKey: action.payload, isFetching: true };
   
    case SVED_OBJ_SUCCESS:
      return { ...state, isFetching: false, EditMode: false };

    case SVED_OBJ_FAIL:
      return { ...state, isFetching: false, EditMode: false };
    
    case ADD_OBJ_REQUEST:
      return { ...state, isFetching: true };
 
    case ADD_OBJ_SUCCESS:
      return { ...state, isFetching: false };
  
    case ADD_OBJ_FAIL:
      return { ...state, isFetching: false };
  
    case GET_GRCOMP_REQUEST:
      return { ...state, isFetching: true };
  
    case GET_GRCOMP_SUCCESS:
      return { ...state, GRCOMPArray: [...action.payload], isFetching: false };

    case GET_GRCOMP_FAIL:
      return { ...state, isFetching: false };
        
    default:
      return state
  }
}
