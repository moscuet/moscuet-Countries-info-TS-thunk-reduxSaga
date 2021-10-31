import React, {useState} from 'react';
import {RootStateOrAny,useDispatch, useSelector, } from "react-redux";
//mport {rootStoreType} from './redux/store'
import { useEffect } from 'react';
import getCountries from './redux/action/countriesAction';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])
   
  const countries = useSelector((state:RootStateOrAny)=> state.countries)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
