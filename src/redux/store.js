import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers'

const middleware = [thunk]

const store = createStore(
	rootReducer,
	process.env.REACT_APP_NODE_ENV !== 'production'
		? composeWithDevTools(applyMiddleware(...middleware))
		: applyMiddleware(...middleware)
)

export default store
