import React from 'react'
import {countryStateType} from '../../types/countriesActionType'
import './homemain.css'
const InfoRow = (country:countryStateType)=>{
    const {name:{common},flags:{png}, region,population} = country
 return(
  <div className="homeMain-info">
      <div className="homeMain-info_flag"><img src= {png} alt='flag'/></div>
      <div>{common}</div>
      <div>Languages</div>
      <div>{population}</div>
      <div>{region}</div>
  </div>
 )
}

export default InfoRow