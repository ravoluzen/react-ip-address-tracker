import React, { useState, useRef, useEffect } from 'react';
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import 'leaflet/dist/leaflet.css'
import Map from './components/Map';
import Input from './components/Input';
import DetailsIP from './components/DetailsIP';

function App() {
  const inputForm = useRef("")
  const [inputValue, setInputValue] = useState("");
  const [ipAddress, setIpAddress] = useState("")
  const [location, setLocation] = useState("")
  const [timezone, setTimezone] = useState("")
  const [isp, setIsp] = useState("")
  const [coordinates, setCoordinates] = useState([0, 0])


  const getIpDetails = async() => {
    const address = await inputForm.current.value;
    const API_URL = "https://geo.ipify.org/api/v2/country,city?apiKey=at_u8MMERgW5I9ThnN1efg2qSW7ZRFsd&ipAddress=";
    const response = await fetch(API_URL + address)
    const data = await response.json()

    setIpAddress(data.ip);
    setLocation(data.location.region + ", " + data.location.city)
    setTimezone(data.location.timezone)
    setIsp(data.isp)
    setCoordinates([data.location.lat, data.location.lng])


  }

  useEffect(() => {
    getIpDetails()
  }, [])

  return (
    <div className="App grid-cols-1">
      <header className='flex flex-col justify-start items-center w-full h-64 z-20'>
         <h1 className='text-white text-2xl font-medium mt-4 md:mt-8 lg:mt-8'>IP Address Tracker</h1>
         <Input setInputValue={setInputValue} inputForm={inputForm} getIpDetails={getIpDetails}/>
         <DetailsIP ipAddress={ipAddress} location={location} timezone={timezone} isp={isp}/>
      </header>
      <div className='h-2/3'>

        <Map coordinates={coordinates}/>
      </div>
    </div>
  );
}

export default App;
