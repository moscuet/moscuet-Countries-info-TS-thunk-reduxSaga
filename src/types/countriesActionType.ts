export const COUNTRIES_LOADING =  'COUNTRIES_LOADING'
export const COUNTRIES_FAIL =  'COUNTRIES_FAIL'
export const COUNTRIES_SUCCESS =  'COUNTRIES_SUCCESS'

export type countryName = {
    common:string
}
export type countryCapital = string[]
export  type countryFlag = {
    
    png:string,
    svg:string
}

interface LooseObject {
    [key: string]: any
}

export  type countryRegion = string
export  type countryPopulation = number

export type countryStateType = {
    name:countryName,
    capital:countryCapital,
    flags:countryFlag,
    lang:LooseObject|any,
    region:countryRegion,
    population:countryPopulation
}

// export type countryStateType = {
//     name:string,
//     capital:string,
//     flag:string,
//     lang:string,
//     region:string,
//     population:number
// }
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