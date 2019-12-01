import React from 'react';
import './index.css';
import Loading from "../loading.js"
import Delay from 'react-delay'


import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import {delay} from 'q';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ReactDOM from 'react-dom'
const options = [
    'Select Semester', 'Fall 2019', 'Winter 2020'
]
const defaultOption = options[0]


let state = {
    courses: [],
    courseCodeValue: ""
}



const _viewSchedules = () => {
    ReactDOM.render(<timetableBlock/>, document.getElementById('root'))
}

const _onSubmit = () => {
    if (state.courseCodeValue.length > 0 && state.courses.indexOf(state.courseCodeValue) === -1) {
        state.courses.push(state.courseCodeValue);
        this.setState({
            courses: state.courses,
            courseCodeValue: ""
        });
    }
};

const _handleChange = (event) => {
    state.courseCodeValue += event.target.value;
    this.setState({
        courseCodeValue: event.target.value
    });
};
const delayAmount = 2400;

const _onSelect = () => {

};

const MainPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Loading/>
                <Delay wait={delayAmount}>
                    <Dropdown options={options} onChange={_onSelect} value={defaultOption}
                              placeholder="Select an option"/>

                    <label>
                        Enter Course Code:
                        <input type="text" value={state.courseCodeValue} name="course_code_input"
                               onChange={_handleChange}/>
                    </label>
                    <input type="submit" value="Add" onClick={_onSubmit}/>
                    <React.Fragment>
                        <ul className="list-group">
                            {
                                state.courses.map(course => (
                                    <li
                                        key={course}
                                        className="list-group-item list-group-item-primary"
                                    >
                                        {course}
                                    </li>
                                ))}
                        </ul>
                    </React.Fragment>
                    <input type="submit" value="View Schedules" onClick={_viewSchedules}/>
                </Delay>
            </header>
        </div>
    );

}

export default MainPage;