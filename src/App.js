
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {

const [teamperature, settemperature] = useState(0)
const [selectedcity, setselectedcity] = useState('paris')

useEffect(()=>{
  gtwr('paris',48.85,2.35)
},[])

function gtwr(city,latitude,longitude){

  setselectedcity(city)

   axios.get('https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
   .then(data=>{
    const tmpe =(data.data.current_weather.temperature)
    settemperature(tmpe)
   })
   .catch(error=>{
    console.log(error)
   })
}

  return (
    <>
      <Header/>
      <main>
        <div className='container'>
        <h1>CLOUDY</h1>
        <p>The Current Temperature at {selectedcity} is <span id='tm'>{teamperature}°C</span> </p>
        <div>
          <button onClick={()=>{gtwr("Kochi",9.93,76.26)}} >Kochi</button>
          <button onClick={()=>{gtwr("kozhikode",11.25,75.78)}} >Kozhikode</button>
          <button onClick={()=>{gtwr("Kollam",8.89,76.61)}} >Kollam</button>
          <button onClick={()=>{gtwr("Trivandrum",8.52,76.93)}} >Trivandrum</button>
        </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
