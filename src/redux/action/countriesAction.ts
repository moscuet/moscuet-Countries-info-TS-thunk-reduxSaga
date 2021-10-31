import {Dispatch} from 'redux'
import axios from 'axios'

import { countriesDispatchtype, COUNTRIES_LOADING, COUNTRIES_FAIL, COUNTRIES_SUCCESS } from '../../types/countriesActionType'
const getCountries  = () => async(dispatch:Dispatch<countriesDispatchtype>) =>{

    try{
        dispatch({
            type:COUNTRIES_LOADING
        })
        const response = await axios.get('https://restcountries.com/v3.1/all')
        dispatch({
            type: COUNTRIES_SUCCESS,
            payload:response.data
        })
    } catch(error:any){
        dispatch({
            type:COUNTRIES_FAIL,
            payload:error
        })
    }
}

export default getCountries