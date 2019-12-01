import React from 'react';
import './App.css';

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const options = [
  'Select Semester', 'Fall 2019', 'Winter 2020'
]
const defaultOption = options[0]

function App() {
  const _onSelect = () => {

  };

  return (
    <div className="App">
      <header className="App-header">
        <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" />
      </header>
    </div>
  );
}

export default App;
