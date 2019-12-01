import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from "./loading.js"
import Delay from 'react-delay'


import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { delay } from 'q';
const options = [
  'one', 'two', 'three'
]
const defaultOption = options[0]

function App() {
  const _onSelect = () => {};

  /**
   * @var delayAmount {number} Lenght of the delay in ms 
   */
  const delayAmount = 2400;

  return (
    <div className="App">
      <header className="App-header">
          <Loading/>
          <Delay wait={delayAmount}>
            <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" />
          </Delay>
          
      </header>
    </div>
  );
}






export default App;
