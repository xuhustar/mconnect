export const setBodyNoScroll = (noScroll) => {
	const body = document.getElementsByTagName('body')[0]

	if (noScroll) {
		body.classList.add('no-scroll')
	} else {
		body.classList.remove('no-scroll')
	}
}

export const getLocalStorage = (key) => {
	return localStorage.getItem(key)
}

export const setLocalStorage = (key, value) => {
	localStorage.setItem(key, value)
}

export const removeLocalStorage = (key) => {
	localStorage.removeItem(key)
}

export const isMobile = () => {
	if (navigator.userAgent.match(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i))
		return true
	else return false
}

export const isTablet = () => {
	if (navigator.userAgent.match(/Tablet|iPad/i)) return true
	else return false
}

export const isDesktop = () => {
	if (!isMobile() && !isTablet()) return true
	else return false
}

export const isLandscape = () => {
	if (window.innerHeight < window.innerWidth) return true
	else return false
}
