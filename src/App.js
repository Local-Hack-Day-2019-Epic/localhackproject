import React from 'react';
import './App.css';

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const options = [
  'Select Semester', 'Fall 2019', 'Winter 2020'
]
const defaultOption = options[0];


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      courseCodeValue: ""
    }
  }


  render() {
    const _onSelect = () => {

    };
    const _handleChange = (event) => {
      this.state.courseCodeValue += event.target.value;
      this.setState({
        courseCodeValue: event.target.value
      });
    };

    const _onSubmit = () => {
      this.state.courses.push(this.state.courseCodeValue);
      this.setState({
        courses: this.state.courses,
        courseCodeValue: ""
      });
    };
    return (
        <div className="App">
          <header className="App-header">
            <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option"/>
            <li>
              <label>
                Enter Course Code:
                <input type="text" value={this.state.courseCodeValue} name="course_code_input" onChange={_handleChange}/>
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
