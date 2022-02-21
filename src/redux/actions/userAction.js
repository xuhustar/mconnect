import userSevice from '../../services/userService'
import { removeLocalStorage, setLocalStorage } from '../../utils/common'
import { errorMapping } from '../../utils/errorMapping'
import * as types from '../constants'

export const setAgeConfirm = (bool) => (dispatch) => {
	setLocalStorage('ageConfirm', bool)

	dispatch({
		type: types.USER_AGE_CONFIRM,
		payload: bool,
	})
}

export const login = (data) => async (dispatch) => {
	try {
		dispatch({ type: types.USER_LOGIN_REQUEST })

		const response = await userSevice.login(data)

		dispatch({
			type: types.USER_LOGIN_SUCCESS,
			payload: response,
		})

		localStorage.setItem('userInfo', JSON.stringify(response))
	} catch (error) {
		dispatch({
			type: types.USER_LOGIN_FAILURE,
			payload: errorMapping(error),
		})
	}
}

export const setUserRegister = (data) => (dispatch) => {
	dispatch({
		type: types.USER_REGISTER_FORM,
		payload: data,
	})
}

export const register = (data) => async (dispatch) => {
	try {
		dispatch({
			type: types.USER_REGISTER_REQUEST,
		})

		//const response = await userSevice.login(data)
		const response = data

		dispatch({
			type: types.USER_REGISTER_SUCCESS,
			payload: response,
		})

		localStorage.setItem('userInfo', JSON.stringify(data))
	} catch (error) {
		dispatch({
			type: types.USER_REGISTER_FAILURE,
			payload: error,
		})
	}
}

export const checkUserRegisterExists = (data, onSetStep) => async (dispatch) => {
	console.log(data, onSetStep)
	try {
		dispatch({
			type: types.CHECK_USER_REGISTER_EXISTS_REQUEST,
		})

		// const checkExists = {
		// 	email: data.email,
		// 	phone: data.phone,
		// }
		//const response = await userSevice.checkUserRegisterExists(checkExists)
		const response = 'true'

		dispatch({
			type: types.CHECK_USER_REGISTER_EXISTS_SUCCESS,
		})

		if (response === 'true') {
			onSetStep(4)
			dispatch(setUserRegister(data))
		}
	} catch (error) {
		dispatch({
			type: types.CHECK_USER_REGISTER_EXISTS_FAILURE,
			payload: error,
		})
	}
}

export const checkUserCurrent = (data, navigate) => async (dispatch) => {
	const response = await userSevice.checkCurrentUser(data)
	if (response !== 'true') {
		dispatch(logout(navigate))
	}
}

export const logout = (navigate) => (dispatch) => {
	removeLocalStorage('userInfo')
	removeLocalStorage('userAgeConfirm')
	dispatch({ type: types.USER_LOGOUT })
	navigate('/login')
}
