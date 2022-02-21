import * as types from '../constants'
import { setLocalStorage } from '../../utils/common'

export const setCookieConsent = (value) => (dispatch) => {
	setLocalStorage('cookieConsent', value)
	dispatch({
		type: types.SET_COOKIE_CONSENT,
		payload: value,
	})
}

export const setCookieDynamic = (name, value) => (dispatch) => {
	setLocalStorage(name, value)
	dispatch({
		type: types.SET_COOKIE_DYNAMIC,
		payload: { name, value },
	})
}
