export const COUNTRIES_LOADING =  'COUNTRIES_LOADING'
export const COUNTRIES_FAIL =  'COUNTRIES_FAIL'
export const COUNTRIES_SUCCESS =  'COUNTRIES_SUCCESS'

export type countryName = {
    common:string
}
export type countryCapital = string[]
export  type countryFlag = {
    flags:string,
    svg:string
}
export  type countryLang = {}
export  type countryRegion = string
export  type countryPopulation = number

export type countryStateType = {
    name:countryName,
    capital:countryCapital,
    flag:countryFlag,
    lang:countryLang,
    region:countryRegion,
    population:countryPopulation
}

export type countriesStateType = {
    countries:countryStateType[],
    isLoading:boolean,
    errorMessage:string
}

// action type
export type countries_loading = {
    type:typeof COUNTRIES_LOADING
    payload?:string
}

export type countries_fail = {
    type:typeof COUNTRIES_FAIL
    payload:string
}

export type countries_success = {
    type:typeof COUNTRIES_SUCCESS,
    payload:[]
}

export type countriesDispatchtype = countries_loading | countries_fail | countries_success