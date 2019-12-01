import React from 'react';
import './App.css';

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import ReactDOM from 'react-dom'
const options = [
  'Select Semester', 'Fall 2019', 'Winter 2020'
]
const defaultOption = options[0];


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    }
  }


  render() {
    let courseValue = "";

    const _onSelect = () => {

    };
    const _handleChange = (event) => {
      courseValue = event.target.value;
    };

    const _onSubmit = () => {
      this.state.courses.push(courseValue);
      this.setState({
        courses: this.state.courses,
      });
    };
    return (
        <div className="App">
          <header className="App-header">
            <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option"/>
            <li>
              <label>
                Enter Course Code:
                <input type="text" name="course_code_input" onChange={_handleChange}/>
              </label>
              <input type="submit" value="Add" onClick={_onSubmit}/>
              <React.Fragment>
                <ul className="list-group">
                  {
                    this.state.courses.map(course => (
                      <li
                          key={course}
                          className="list-group-item list-group-item-primary"
                      >
                        {course}
                      </li>
                  ))}
                </ul>
              </React.Fragment>
            </li>
          </header>
        </div>
    );

  }
}
export default App;
