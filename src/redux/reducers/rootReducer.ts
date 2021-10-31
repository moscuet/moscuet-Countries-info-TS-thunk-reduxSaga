import { combineReducers } from "redux"
import {countriesReducer} from './countriesReducer'


const rootReducers = combineReducers(countriesReducer)

export default rootReducers