import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Food from './components/Food.js';

function App() {
  return (
    <div className="App">
      <Food />
    </div>
  );
}

export default App;
