import React from "react";
import "../Stylesheets/Form.scss";

export default function Form() {
  return (
    <div class='wrapper'>
      <h2>Masz pytanie? Napisz do nas!</h2>
      <form>
        <div className="inputs">
          <input type="text" placeholder="Wpisz swój e-mail"></input>
          <input
            type="text"
            list="topics"
            placeholder="Wybierz temat rozmowy"
          ></input>
            </div>
          <datalist id="topics">
            <option value="Rezerwacja atrakcji"></option>
            <option value="Skorzystanie z dofinansowania"></option>
            <option value="Pakiety rodzinne"></option>
            <option value="Inny"></option>
          </datalist>
      
        <textarea type="text" placeholder="Treść wiadomości..."></textarea>
      </form>
      <button>WYŚLIJ</button>
    </div>
  );
}