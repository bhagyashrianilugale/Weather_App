import Searchbox  from '../components/searchbox.jsx';
import InfoBox from '../components/InfoBox.jsx';
import { useState } from "react";
import '../index.css';


export default  function Weatherapp(){
    const[WeatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feels_Like: 17.84,
        humidity: 47,
        temp: 18.69,
        tempMax: 18.69,
        tempMin: 18.69,
        feelslike: 22.98,
        weather:"overcast clouds"
    });

    let updateInfo = (newInfo)=>{
         setWeatherInfo(newInfo);    
    }   
     return(
        <div style={{textAlign:"center"}} className="main_page">
            <Searchbox updateInfo={updateInfo}/>
            <InfoBox Info={WeatherInfo}/>
        </div>
     
    )
};
