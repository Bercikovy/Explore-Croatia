import React, { useState } from "react";
import "../Stylesheets/Filter.scss";
import axios from "axios";
import { FaWalking } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiFireworkRocket } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import "../Stylesheets/hover.css";

function Filter() {
  const [explore, setExplore] = useState([]);

  const getData = () => {
    axios.get(`http://localhost:3001/db1`).then((res) => {
      setExplore(res.data);
      console.log(explore);
    });
  };

  return (
    <div className="filterWrapper">
      <div className="optionsWrapper">
        <p onClick={getData}>ODKRYWAJ</p>
        <p>KATEGORIE</p>
      </div>
      <div className="categoryWrapper">
        <div className="item1 hvr-wobble-to-bottom-right">
          <span className="flexWrapper">
            <span>
              <FaWalking size="70" />
            </span>
            Wycieczki<span>200 pozycji</span>
          </span>
        </div>
        <div className="item2 hvr-wobble-to-bottom-right">
          <span className="flexWrapper">
            <span>
              <FaCity size="70" />
            </span>
            Zwiedzanie miast<span>54 pozycji</span>
          </span>
        </div>
        <div className="item3 hvr-wobble-to-bottom-right">
          <span className="flexWrapper">
            <span>
              <FaUmbrellaBeach size="70" />
            </span>
            Plaze Chorwacji<span>67 pozycji</span>
          </span>
        </div>
        <div className="item4 hvr-wobble-to-bottom-right">
          <span className="flexWrapper">
            <span>
              <GiFireworkRocket size="70" />
            </span>
            Rozrywka<span>120 pozycji</span>
          </span>
        </div>
        <div className="item5 hvr-wobble-to-bottom-right">
          <span className="flexWrapper">
            <span>
              <FaBed size="70" />
            </span>
            Noclegi<span>20 pozycji</span>
          </span>
        </div>
      </div>

      <div className="Images">
        {
          //Mapowanie danych z bazy danych//
          explore.map(({ _id, title, content, image }) => (
            <div key={_id}>
              <h1>{title}</h1>
              <img src={image} />
              <p>{content}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Filter;
