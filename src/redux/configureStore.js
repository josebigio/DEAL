import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import counterReducer from './counter/counter'
import userReducer from './user'
import reelsReducer from './reels'

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    reels: reelsReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))