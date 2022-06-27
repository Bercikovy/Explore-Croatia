import React from 'react'
import "./Fonts/Fonts.scss";
import "../Stylesheets/MapHeader.scss";
import Map from './Map'; 


export default function MapHeader() {
  return (
    <div className='mapheaderWrapper'>
        
        <h1>Wyszukaj Atrakcji Na Podstawie Województwa</h1>
        <Map/>
        </div>
  )
}
