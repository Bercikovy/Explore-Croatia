import React from "react";
import "../Stylesheets/SortFilterSearch.scss";

const SortFilterSearch = () => {
  return (
    <section className="formWrapper" id="Explore">
      <h1>WYSZUKAJ ATRAKCJE</h1>

      <form className="sort">
        <h1>Sortuj</h1>
        <input
          type="text"
          value=""
          list="topics"
          placeholder="Sortuj Atrakcje"
        ></input>

        <datalist id="topics">
          <option value="Najbliższe atrakcje"></option>
          <option value="Najładniejsza pogoda"></option>
          <option value="Długość zwiedzania"></option>
        </datalist>
      </form>
      <div className="header">
        <h1>Filtruj</h1>
        <p>Województwa</p>
      </div>
      <form className="filter">
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Dolnośląskie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Kujawsko-pomorskie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Lubelskie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Łódzkie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Małopolskie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Mazowieckie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Opolskie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Podkarpackie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Podlaskie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Pomorskie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Śląskie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Świętokrzyskie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Warmińsko-mazurskie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Wielkopolskiemorskie</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> Zachodniopomorskie</label>
        </div>
      </form>
      <div className="header">
        <p>Pogoda</p>
      </div>
      <form className="weather">
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> 20 +</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> 20 -</label>
        </div>
      </form>

      <div className="header">
        <p>Długość zwiedzania</p>
      </div>
      <form className="length">
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> 0.5-1.5h</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> 1.5-3h -</label>
        </div>
        <div className="item">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1"> 3h + -</label>
        </div>
      </form>
    </section>
  );
};

export default SortFilterSearch;
