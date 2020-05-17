import axios from 'axios'

const url1="https:/covid19.mathdro.id/api"; 
const url2="https:/covid19.mathdro.id/api/daily"; 
const url3="https:/covid19.mathdro.id/api/countries"

export  const  fetchData = async (country) =>{ 
    let  changeableUrl = url1; 
    
    if(country) {
        changeableUrl=`${url1}/countries/${country}` 

    }
    try{
        const {data: { confirmed, recovered, deaths, lastUpdates} }= await axios.get(url1); 
        
        return {  confirmed, recovered, deaths, lastUpdates }

    }catch(error){
        console.log(error) 
    }

} 

export const fetchDailyData= async()=>{
    try{
        const {data}= await axios.get(url2);   

        const modifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total, 
            deaths:dailyData.deaths.total,
            date: dailyData.reportDate
        })); 

        return modifiedData
    }catch(error){

    }
} 

export const fetchCountries = async () =>{
    try{
        const { data: { countries } } =await axios.get(url3);  
         
        return countries.map((country) => country.name); 
       
        

    
    }catch(error){
        console.log(error)
    }
}
