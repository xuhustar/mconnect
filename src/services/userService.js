import axiosClient from '../utils/axiosClient'

const userSevice = {
	login: async (data) => {
		return await axiosClient.post(`/api/ReVamp/Login`, data)
	},

	register: async (data) => {
		return await axiosClient.post('/api/ReVamp/Register', data)
	},

	checkUserExists: async (data) => {
		return await axiosClient.post('/api/ReVamp/checkUserExists', data)
	},

	checkUserReferalCode: async (data) => {
		return await axiosClient.post('/api/ReVamp/checkUserReferalCode', data)
	},

	checkCurrentUser: async (data) => {
		return await axiosClient.post('/api/ReVamp/checkCurrentUser', data)
	},
}

export default userSevice
