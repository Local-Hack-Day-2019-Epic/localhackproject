import React from 'react';
import logo from './logo.svg';
import './App.css';

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const defaultOption = options[0]
const options = [
  'one', 'two', 'three'
]

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />


      </header>
    </div>
  );
}

export default App;
