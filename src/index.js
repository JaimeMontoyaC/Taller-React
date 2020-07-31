import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Api from './components/llamadoApi/Api'
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Routes from './components/Routes'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes></Routes>
    |<App></App>
    <Api></Api>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
