import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [temperature , setTemperature] = useState(0)
  const [selectedCity, setSelectedCity] = useState ('Palakkad')

  useEffect(() => {
    getWeather('Palakkad' , 10.78, 76.65)
  } ,[])

  function getWeather(city,latitude, longitude,){
    setSelectedCity(city)
    axios.get("https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
    .then(data=>{
       const temp = (data.data.current.temperature_2m)
       setTemperature(temp)
      //  console.log(data)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <>
      <header></header> 
      <main>
        <h1>My Weather App</h1>
        <p>The Current Temperature At {selectedCity} is <span id='temperature'>{temperature} °C</span> </p>
        <div className='buttons'>
          <button onClick={()=>{getWeather("Kochi", 9.93, 76.26)}}> Kochi </button>
          <button onClick={()=>{getWeather("Trivandrum", 8.52, 76.93)}}>Trivandrum</button>
          <button onClick={()=>{getWeather("Calicut", 11.25, 75.78)}}>Calicut</button>

        </div>

      </main>
      <footer></footer>

    </>
  );
}

export default App;
