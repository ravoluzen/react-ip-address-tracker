import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import ChangeMapView from './ChangeMapView'
import { Icon } from 'leaflet'
import icon from '../images/icon-location.svg'
const Map = ({coordinates}) => {
  return (
    <div className='h-2/3 relative z-0 lg:h-full'>
      <MapContainer 
        center={coordinates} zoom={13} 
        style={{ width: '100%', height:'80vh'}}
        
      >
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker 
      position={coordinates} 
      icon={new Icon({iconUrl:icon})}>
        <Popup >Pretty Popup</Popup>
      </Marker>
      <ChangeMapView coordinates={coordinates}/>
      </MapContainer>
    </div>
  )
}

export default Map 