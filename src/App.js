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
  }

  render() {
    let courses = {
      list_of_courses: ["test1", "test2", "test3"]
    }
    let courseValue = "";

    const _onSelect = () => {

    };
    const _handleChange = (event) => {
      courseValue = event.target.value;
    };

    const _onSubmit = () => {
      courses.list_of_courses.push(courseValue);
      courses.list_of_courses.map(course => (
          <li
              key={course}
              className="list-group-item list-group-item-primary"
          >
            {course}
          </li>
      ));
    };
    return (
        <div className="App">
          <header className="App-header">
            <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option"/>
            <form onSubmit={_onSubmit}>
              <label>
                Enter Course Code:
                <input type="text" name="course_code_input" onChange={_handleChange}/>
              </label>
              <input type="submit" value="Add"/>
              <React.Fragment>
                <ul className="list-group">
                  {courses.list_of_courses.map(course => (
                      <li
                          key={course}
                          className="list-group-item list-group-item-primary"
                      >
                        {course}
                      </li>
                  ))}
                </ul>
              </React.Fragment>
            </form>
          </header>
        </div>
    );

  }
}
export default App;
