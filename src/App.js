import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Routes from './Routes';


function App() {
  return (
    <Router>
      <Routes />
    </Router>

  );
}

export default App;
