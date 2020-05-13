// import React,{useState,useEffect}  from 'react' ; 
import React from 'react';
import {NativeSelect,FormControl} from '@material-ui/core'  
// import {fetchCountries} from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker =({handleCountryChange})=>{  

    // const [fetchedCountries, setfetchedCountries]=useState([]);
    // useEffect(()=>{
    //     const fetchAPI= async ()=>{  
    //         setfetchedCountries(await fetchCountries())


    //     } 
    //     fetchAPI();
    // }, [setfetchedCountries]);  

     
    const EA = [
        "Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi","South Sudan" 
    ] 

    
    return (
       <FormControl className={styles.formControl}>
           <NativeSelect  defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
               <option value=""> global</option>  
               {EA.map((country, i)=> <option key={i} value={country}> {country} </option> )} 

           </NativeSelect>


       </FormControl>
    )
}
export default CountryPicker;