import React from 'react';
import './index.css';
import Loading from "../loading.js"
import Delay from 'react-delay'
import {BrowserRouter as Router, Route,Switch, Link, Redirect, useHistory} from "react-router-dom";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


import {delay} from 'q';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ReactDOM from 'react-dom'
import timetableBlock from "./timetableBlock";
const options = [
    'Select Semester', 'Fall 2019', 'Winter 2020'
]
const defaultOption = options[0]

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            courseCodeValue: ""
        };
    }

        render() {

        if (this.state.redirect) {

                    return<Router>
            <Redirect to="/timetableBlock"/>;
            </Router>
                }

                return (
                    <div className="App">
                        <header className="App-header">
                            <Loading/>
                            <Delay wait={this.delayAmount}>
                                <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                                          placeholder="Select an option"/>

                                <label>
                                    Enter Course Code:
                                    <input type="text" value={this.state.courseCodeValue} name="course_code_input"
                                           onChange={this._handleChange}/>
                                </label>
                                <input type="submit" value="Add" onClick={this._onSubmit}/>
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
                                <input type="submit" value="View Schedules" onClick={this._viewSchedules}/>
                            </Delay>
                        </header>
                    </div>

                )

            }





    _viewSchedules = () => {
        this.setState({redirect: true});
    }

    _onSubmit = () => {


        if (this.state.courseCodeValue.length > 0 && this.state.courses.indexOf(this.state.courseCodeValue) === -1) {
            this.state.courses.push(this.state.courseCodeValue);
            this.setState({
                courses: this.state.courses,
                courseCodeValue: ""
            });
        }
    };

    const
    _handleChange = (event) => {
        this.state.courseCodeValue += event.target.value;
        this.setState({
            courseCodeValue: event.target.value
        });
    };
    const
    delayAmount = 2400;

    const
    _onSelect = () => {
    };



}
export default MainPage;