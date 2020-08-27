import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './counterReducer'
import themeReducer from './themeReduser';
import tableReducer from './tableReduser';

let rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
	table: tableReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store


export default store;