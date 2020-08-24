import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './counterReducer'
import themeReducer from './themeReduser';


let rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store


export default store;