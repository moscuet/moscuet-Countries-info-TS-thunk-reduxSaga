import {createStore, applyMiddleware} from 'redux' 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {countriesReducer }from './reducers/countriesReducer'

const middlewares = [thunk]

const store = createStore(countriesReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store