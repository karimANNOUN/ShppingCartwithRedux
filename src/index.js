import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // hada provider khass b redux bah ysahlelna lkhedma bah child nb3touh win nhebou 


import './index.css';
import App from './App';
import { store } from './store/store'; // b store hada les infos li ktebnehm  koul f fichier ta store adeka na9drou n3agbouhm l ay blasa wela state 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
     <Provider store={store} > 
     <Router>
     <App />
    </Router>
    </Provider>
  </React.StrictMode>
);


