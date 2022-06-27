import React from 'react'
import "../Stylesheets/Map.scss";
import PolandMap from '../Photos/PolandMap.png';


export default function Map() {
  return (
    <div className='backgroundWrapper'>
    <div className='mapWrapper'>
        <img src={PolandMap} alt='Mapa Województw Polski'/>
        <ul>
            <li className='zachodnioPomorskie'>
                <a href="/wp.pl" alt="Dupa"><span className='visually-hidden'>Zachodnio Pomorskie</span></a>
            </li>
            <li className='pomorskie'><a href=""><span className='visually-hidden'>Pomorskie</span></a></li>
            <li className='warminskoMazurskie'><a href="#"><span className='visually-hidden'>Warmińsko Mazurskie</span></a></li>
            <li className='podlaskie'><a href=""><span className='visually-hidden'></span></a></li>
            <li className='lubuskie'><a href=""><span className='visually-hidden'></span></a></li>
            <li className='wielkopolskie'><a href=""><span className='visually-hidden'></span></a></li>
            <li className='kujawskoPomorskie'><a href=""><span className='visually-hidden'></span></a></li>
            <li className='mazowieckie'><a href=""><span className='visually-hidden'></span></a></li>
            <li className='dolnoslaskie'><a href=""><span className='visually-hidden'></span></a></li>
            <li className='lodzkie'><a href=""><span className='visually-hidden'></span></a></li>
            <li className='swietokrzyskie'><a href=""><span className='visually-hidden'></span></a></li>
            <li className='lubelskie'><a href=""><span className='visually-hidden'></span></a></li>
            <li className='opolskie'><a href=""><span className='visually-hidden'></span></a></li>
            <li className='slaskie'><a href=""><span className='visually-hidden'></span></a></li>
            <li className='malopolskie'><a href=""><span className='visually-hidden'></span></a></li>
            <li className='podkarpackie'><a href=""><span className='visually-hidden'></span></a></li>
        </ul>


    </div>
    </div>
  )
}
