import * as types from '../constants'
import { getLocalStorage } from '../../utils/common'

const initialState = {
	cookieConsent: Boolean(getLocalStorage('cookieConsent')) || false,
	cookieMarketing: Boolean(getLocalStorage('cookieMarketing')) || true,
	cookiePerformance: Boolean(getLocalStorage('cookiePerformance')) || true,
}

export const cookieReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_COOKIE_CONSENT:
			return {
				...state,
				cookieConsent: action.payload,
			}
		case types.SET_COOKIE_DYNAMIC:
			return {
				...state,
				[action.payload.name]: action.payload.value,
			}
		default:
			return state
	}
}
