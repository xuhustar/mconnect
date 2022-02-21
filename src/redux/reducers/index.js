import { combineReducers } from 'redux'
import { cookieReducer } from './cookieReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
	cookie: cookieReducer,
	user: userReducer,
})
