import * as types from '../constants'
import { getLocalStorage } from '../../utils/common'

const initialState = {
	loading: false,
	isLogged: false,
	ageConfirm: Boolean(JSON.parse(getLocalStorage('ageConfirm'))) || false,
	userInfo: JSON.parse(getLocalStorage('userInfo')) || null,
	userRegister: null,
}

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.USER_LOADING_SHOW:
			return {
				...state,
				loading: true,
			}
		case types.USER_LOADING_HIDE:
			return {
				...state,
				loading: false,
			}
		case types.USER_AGE_CONFIRM:
			return {
				...state,
				ageConfirm: action.payload,
			}
		case types.USER_LOGIN_REQUEST:
			return {
				...state,
				loading: true,
			}
		case types.USER_LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				userInfo: action.payload,
			}
		case types.USER_LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case types.USER_REGISTER_FORM:
			return {
				...state,
				userRegister: action.payload,
			}
		case types.CHECK_USER_REGISTER_EXISTS_REQUEST:
			return {
				...state,
				loading: true,
			}
		case types.CHECK_USER_REGISTER_EXISTS_SUCCESS:
			return {
				...state,
				loading: false,
			}
		case types.CHECK_USER_REGISTER_EXISTS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case types.USER_LOGOUT:
			return {
				loading: false,
				userAgeConfirm: false,
				userInfo: null,
			}
		default:
			return state
	}
}
