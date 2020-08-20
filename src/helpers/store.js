import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const loggerMiddleware = createLogger();

if (process.env.NODE_ENV !== 'production') {
	var middleware = composeWithDevTools(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	)
} else {
	var middleware = composeWithDevTools(
		applyMiddleware(
			thunkMiddleware
		)
	)
}

export const store = createStore(
	rootReducer,
	middleware
)
