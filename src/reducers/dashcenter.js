import { GET_COMP_REQUEST } from '../actions/CompActions'
import { GET_COMP_SUCCESS } from '../actions/CompActions'
import { GET_COMP_FAIL } from '../actions/CompActions'

const initialState = {
  compArray: [],
  //[{id: 3,
  //  sh_name: "HP ProLiant",
  //  sh_quant: "ML110 G5",
  //  sh_weight: "Dual CPU E2160",
  //  sh_serial: "4",
  //  sh_inventory: "3,5\"_250*2",
  //  Dept_id: "4354473C-325D-4BE3-B416-BECA810ACB8D",
  //  }],     // [[1,2,3,4],[5,6,7,8],[9,10,11,12]],
  isFetching: false, // изначально статус загрузки - ложь
  CurrentComp: 0,
}

//    return { ...state, CurrentObj: action.payload, isFetching: true };

export function dashcenterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMP_REQUEST:
      return { ...state, isFetching: true };

    case GET_COMP_SUCCESS:
      return { ...state, compArray: [...action.payload], isFetching: false };
  
    case GET_COMP_FAIL:
      return { ...state, isFetching: false };

    default:
      return state
  }
}
