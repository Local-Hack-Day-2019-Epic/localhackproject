import React from 'react';
import './index.css';
import Loading from "../loading.js"
import Delay from 'react-delay'
import {BrowserRouter as Router, Route,Switch, Link, Redirect, useHistory} from "react-router-dom";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import rmpScraper from '../utils/rmpScrape.js'

import {delay} from 'q';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ReactDOM from 'react-dom'
import timetableBlock from "./timetableBlock";


class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            courseCodeValue: ""
        };
    }

        render() {


                return (
                    <div className="App">
                        <header className="App-header">
                            <Loading/>
                            <Delay wait={this.delayAmount}>

                                <label>
                                    Enter Professor Name:
                                    <input type="text" value={this.state.courseCodeValue} name="course_code_input"
                                           onChange={this._handleChange}/>
                                </label>
                                <input type="submit" value="Add" onClick={this.onSubmit}/>
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
                            </Delay>
                        </header>
                    </div>

                )

            }





    _viewSchedules = () => {
        let scraper = new rmpScraper(this.state.courseCodeValue, this);
        scraper.search();
    }

    onSubmit = () => {
        this.scraper = new rmpScraper(this.state.courseCodeValue, this);
        let result = this.scraper.search();

        if (this.state.courseCodeValue.length > 0 && this.state.courses.indexOf(this.state.courseCodeValue) === -1) {

        }
    };
    setRating = () => {
        this.state.courses.push("Professor " + this.scraper.professorName + " has a " + this.scraper.professorRating);
        this.setState({
            courses: this.state.courses,
            courseCodeValue: ""
        });
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