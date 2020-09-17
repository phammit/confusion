import React from 'react';
import ReactDOM from 'react-dom';
//boostrap folder located in node_modules/bootstrap/....
import 'bootstrap/dist/css/bootstrap.min.css';
//index.css will override any conflicts styling it has with bootstrap by listing it after
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
