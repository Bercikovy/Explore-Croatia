import React from "react";
import "../Stylesheets/SortFilterSearch.scss";

const SortFilterSearch = () => {
  return (
    <section className="formWrapper">
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
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Dolnośląskie</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Kujawsko-pomorskie</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Lubelskie</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Łódzkie</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Małopolskie</label>
            </div><div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Mazowieckie</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Opolskie</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Podkarpackie</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Podlaskie</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Pomorskie</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Śląskie</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Świętokrzyskie</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Warmińsko-mazurskie</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Wielkopolskiemorskie</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> Zachodniopomorskie</label>
            </div>





        </form>
        <div className="header">
        <p>Pogoda</p>
        </div>
        <form className="weather">
        <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> 20 +</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> 20 -</label>
            </div>

        </form>

        <div className="header">
        <p>Długość zwiedzania</p>
        </div>
        <form className="length">
        <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> 0.5-1.5h</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> 1.5-3h -</label>
            </div>
            <div className="item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> 3h + -</label>
            </div>

        </form>
            





            </section>
            );
          };
          
          export default SortFilterSearch;






        {/*<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        <label for="vehicle1"> Dolnośląskie</label><br/>
        </div>
        <div className="item">
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
        <label for="vehicle2">Kujawsko-pomorskie</label><br/>
        </div>
        <div className="item">
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        <label for="vehicle3"> Lubelskie </label>
        </div>
        <div className="item">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        <label for="vehicle1"> Lubuskie</label><br/>
        </div>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
        </div>
        <label for="vehicle2">Łódzkie</label><br/>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        <label for="vehicle3"> Małopolskie </label>
        <br/>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        <label for="vehicle1"> Mazowieckie</label><br/>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
        <label for="vehicle2"> Opolskie</label><br/>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        <label for="vehicle3"> Podkarpackie </label>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        <label for="vehicle1"> Podlaskie</label><br/>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
        <label for="vehicle2"> Pomorskie</label><br/>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        <label for="vehicle3"> Śląskie </label>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        <label for="vehicle1"> Świętokrzyskie</label><br/>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
        <label for="vehicle2"> Warmińsko-mazurskie</label><br/>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        <label for="vehicle3"> Wielkopolskie </label>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        <label for="vehicle3"> Zachodniopomorskie </label>
        */}
        
  
  
        
        
      
      

      
 
