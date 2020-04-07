import { combineReducers } from 'redux'
import { objReducer } from './obj'
import { usersReducer } from './users'
import { historyReducer } from './history'
import { menuReducer } from './menupad'
import { strucReducer } from './structree'
import { dashleftReducer } from './dashleft'
import { dashrightReducer } from './dashright'
import { dashcenterReducer } from './dashcenter'
import { shipReducer } from './ship'
import { shipdetReducer } from './shipdet'
import { globalReducer } from './global'

export const rootReducer = combineReducers({
   obj: objReducer,
   users: usersReducer,
   history: historyReducer,
   menu: menuReducer,
   structree: strucReducer,
   dashleft: dashleftReducer,
   dashright: dashrightReducer,
   dashcenter: dashcenterReducer,
   ship: shipReducer,
   shipdet: shipdetReducer,
   global: globalReducer,
})
