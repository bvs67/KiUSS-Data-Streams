import { combineReducers } from 'redux'
import { objReducer } from './obj'
import { usersReducer } from './users'
import { historyReducer } from './history'
import { menuReducer } from './menupad'
import { strucReducer } from './structree'

export const rootReducer = combineReducers({
   obj: objReducer,
   users: usersReducer,
   history: historyReducer,
   menu: menuReducer,
   structree: strucReducer,
})
