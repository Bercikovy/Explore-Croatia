import React from 'react'
import '../Stylesheets/Filter.scss'
import { FaWalking } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiFireworkRocket } from "react-icons/gi";
import { FaBed} from "react-icons/fa";





function Filter() {
  return (
    <div className='filterWrapper'>

        <div className="optionsWrapper">
            <p>ODKRYWAJ</p>
            <p>KATEGORIE</p>
        </div>
        <div className="categoryWrapper">

            <div className="item1"><span className='flexWrapper'><span><FaWalking size='70'/></span>Wycieczki<span>200 pozycji</span></span></div>
            <div className="item2"><span className='flexWrapper'><span><FaCity size='70'/></span>Zwiedzanie miast<span>54 pozycji</span></span></div>
            <div className="item3"><span className='flexWrapper'><span><FaUmbrellaBeach size='70'/></span>Plaze Chorwacji<span>67 pozycji</span></span></div>
            <div className="item4"><span className='flexWrapper'><span><GiFireworkRocket size='70'/></span>Rozrywka<span>120 pozycji</span></span></div>
            <div className="item5"><span className='flexWrapper'><span><FaBed size='70'/></span>Noclegi<span>20 pozycji</span></span></div>

        </div>





    </div>
  )
}

export default Filter