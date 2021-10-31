import { COUNTRIES_FAIL,countriesStateType,countryStateType, countriesDispatchtype, COUNTRIES_LOADING, COUNTRIES_SUCCESS } from "../../types/countriesActionType"


const Defaultstate:countriesStateType= {
    countries:[],
    isLoading:false,
    errorMessage:''
}

export const countriesReducer = (state= Defaultstate, action:countriesDispatchtype) =>{
    switch(action.type){
        case  COUNTRIES_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case COUNTRIES_FAIL: 
        return {
            ...state,
            isLoading:false,            
            errorMessage:action.payload           
        }
        case COUNTRIES_SUCCESS: 
        return {
            ...state,
            countries:action.payload,
            isLoading:false
        }

        default:
            return state
    }
   
}

export const getCountriesSuccess = (state:countriesStateType): countryStateType[]=> state.countries
export const getCountriesLoading = (state:countriesStateType): boolean=> state.isLoading
export const getCountriesError = (state:countriesStateType): string=> state.errorMessage