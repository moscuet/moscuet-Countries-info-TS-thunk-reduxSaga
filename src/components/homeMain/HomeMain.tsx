import React from "react";
import { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import getCountries from "../../redux/action/countriesAction";
import {getCountriesSuccess} from '../../redux/reducers/countriesReducer'
import {countryStateType} from '../../types/countriesActionType'
import './homemain.css'

import InfoRow from './InfoRow'
import Pagination  from './Pagination'

type  dataSize = number
const  HomeMain:React.FC =() => {
    const dispatch = useDispatch();
    const {countries,isLoading } = useSelector((state: RootStateOrAny) => state);
    
    const [page, setPage] =  useState(1)
    const[countriesData, setCountriesData] = useState([])
    const [rawData, setRawData]= useState([])
     
    const[isSort, setIsSort] = useState(false)

    useEffect(() => {
        if(countries.length ){
            if(!countriesData.length){
                console.log('ok')
                setCountriesData(countries)
                setRawData(countries)
            }
            return
        }
        dispatch(getCountries());
        

    }, [dispatch,countries.length]);
    
   


    const resetPage = (page:number):void => {
    setPage(page)
    }

  type nameT = {name:{common:string}}
    function sortFunc( a:nameT, b :nameT) {
        if ( a.name.common < b.name.common ){
          return -1;
        }
        if ( a.name.common > b.name.common ){
          return 1;
        }
        return 0;
      }
      function revSortFunc( a:nameT, b :nameT) {
        if ( a.name.common > b.name.common ){
          return -1;
        }
        if ( a.name.common < b.name.common ){
          return 1;
        }
        return 0;
      }

      const sortByName = () => {
          let z = [...countriesData]
          isSort?z.sort(revSortFunc): z.sort(sortFunc)
          setIsSort(!isSort)
       

         setCountriesData(z)
      }
   
    const onChangeSearch = (e: any) =>{
        const input = e.target.value.toUpperCase()
        console.log(countries)
        let searchedcountries = [...rawData]
      
        const filteredCountries = searchedcountries.filter( (country:countryStateType) =>{
          return country.name.common.toUpperCase().includes(input)
        })
        console.log(filteredCountries.length)
        setCountriesData(filteredCountries)
       
    }
   

return (
    <div className='homeMain'>
        <Box
          component="form"
          sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
       >
         <TextField onChange = {onChangeSearch}id="outlined-basic" label="Search countries" variant="outlined" />  
      </Box>

      <div className="homeMain_title">
        <p >Flag</p>
        <p onClick ={sortByName}>Name</p>
        <p>Languages</p>
        <p>Population</p>
        <p>Region</p>
      </div>

  
      { countriesData.slice(page*10-10,page*10).map( (country:countryStateType) =>{
         return <InfoRow key = {country.name.common} {...country}  />
      })}
      <div className="pagination">
        <Pagination resetPage = {resetPage}  dataSize={countriesData.length}/>
      </div>
    </div>
  );
}

export default HomeMain;
