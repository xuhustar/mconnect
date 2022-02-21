import axios from 'axios'

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		'content-type': 'application/json',
	},
})

axiosClient.interceptors.request.use(
	(config) => {
		if (!config.headers.clientId) {
			const clientId = process.env.REACT_APP_CLIENT_ID

			if (clientId) {
				config.headers.clientId = clientId
			}
		}
		return config
	},
	(error) => Promise.reject(error)
)

axiosClient.interceptors.response.use(
	(response) => {
		return response.data
	},
	(error) => Promise.reject(error)
)

export default axiosClient
