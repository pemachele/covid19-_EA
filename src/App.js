import React from 'react'; 
import {Cards,Charts,CountryPicker} from './components' 
import styles  from './App.module.css'; 
import {fetchData} from './api'  
import coronaImage from './images/covid-19.jpg' 
import {Typography } from '@material-ui/core'


class App extends  React.Component{ 
  state = {
    data:{}, 
    country:'', 
    activeCases:''
  }

  async componentDidMount(){
    const fetchedData=await fetchData(); 
    var activeCases = fetchedData.confirmed.value- fetchedData.recovered.value
    this.setState({data:fetchedData, activeCases:activeCases});
  } 
  
  handleCountryChange = async (country) =>{  
    const fetchedData= await fetchData(country); 

    var activeCases = fetchedData.confirmed.value- fetchedData.recovered.value -fetchedData.deaths.value
     
    this.setState({data: fetchedData, country:country , activeCases:activeCases}) 
    
 
  } 

     

     

  

  


   
  
   

  render(){   
    const { data, country , activeCases }= this.state 
  


    return ( 
      <div className={styles.container}>  
        <Typography className={styles.header} variant="h6"><strong>COVID-19 East Africa </strong> </Typography>  
        <img className={styles.image} src={coronaImage} alt='covid-19' />
       
        <Cards data={data} activeCases={activeCases} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country} activeCases={activeCases} />
      </div>
    ); 
  }

}

export default App;
