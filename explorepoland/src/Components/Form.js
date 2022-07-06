import React from "react";
import "../Stylesheets/Form.scss";
import { useState } from "react";

export default function Form() {

   const [email, setEmail] = useState('');
   const [topic, setTopic] = useState('');
   const [message, setMessage] = useState('');

  const submit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(topic);
    console.log(message);

  }

  return (
    <div className='wrapper'>
      <h2>Masz pytanie? Napisz do nas!</h2>
      <form onSubmit={submit}>
        <div className="inputs">
          <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder="Wpisz swój e-mail"></input>

           <input
            type="text"
            value={topic}
            onChange={e => setTopic(e.target.value)}
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
      
        <textarea 
        type="text" 
        value={message} 
        placeholder="Treść wiadomości..." 
        onChange={e => setMessage(e.target.value)}></textarea>
        <button>WYŚLIJ</button>
      </form>
 
    
    </div>
  );
}
