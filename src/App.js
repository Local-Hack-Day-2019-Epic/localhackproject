import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from "./loading.js"


import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const options = [
  'one', 'two', 'three'
]
const defaultOption = options[0]

function App() {
  const _onSelect = () => {

  };

  return (
    <div className="App">
      <header className="App-header">
          <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" />
          <Loading/>
      </header>
    </div>
  );
}

export default App;
