import {Dispatch} from 'redux'
import axios from 'axios'

import {countryStateType ,countriesDispatchtype, COUNTRIES_LOADING, COUNTRIES_FAIL, COUNTRIES_SUCCESS, countriesStateType } from '../../types/countriesActionType'
const getCountries  = () => async(dispatch:Dispatch<countriesDispatchtype>) =>{

    interface LooseObject {
        [key: string]: any
    }
    try{
        dispatch({
            type:COUNTRIES_LOADING
        })
        const response = await axios.get('https://restcountries.com/v3.1/all')
        console.log(response.data[0].languages, response.data[0].flags)
        const data = response.data.map( (country: countryStateType) =>{
            // const data = {
            //     name:country.name.common,
            //     capital:country.capital,
            //     flags:country.flags,
            //     lang:'' || country.languages,
            //     region:country.region,
            //     population:country.population
            // }
            

        })
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