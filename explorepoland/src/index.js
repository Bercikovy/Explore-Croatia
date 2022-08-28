import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router, Route, browserHistory} from 'react-router'
import './index.css';
import App from './App';
import Residence from "./Components/Residence";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path="/Noclegi" component={Residence} />
    </Router>

  //<React.StrictMode>
    //<App />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
