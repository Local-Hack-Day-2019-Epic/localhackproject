import React from 'react';
import './App.css';

import Loading from "./loading.js"
import Delay from 'react-delay'


import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import MainPage from "./pages";
import TimetableBlock from "./pages";
import {delay} from 'q';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ReactDOM from 'react-dom'

import {BrowserRouter as Router, Route,Switch, Link, Redirect, useHistory} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {


        return <Route>
            <Switch>
            <Route path = "/" component = {MainPage} />
            <Route path = "/" component = {TimetableBlock}/>
            </Switch>
        </Route>

    }
}

export default App;
