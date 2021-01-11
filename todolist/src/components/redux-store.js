import {combineReducers, createStore} from 'redux'
import taskReducer from './task-reducer'

const reducers = combineReducers ({
 taskPage: taskReducer
})



let store = createStore(reducers)

window.store = store

export default store

