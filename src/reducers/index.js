import { combineReducers } from 'redux'
import { objReducer } from './obj'
import { usersReducer } from './users'

export const rootReducer = combineReducers({
   obj: objReducer,
   users: usersReducer,
})
