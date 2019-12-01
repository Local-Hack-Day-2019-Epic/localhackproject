import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class Timetable extends Component {
    //top left is empty, so both rows and columns are 1 less than stated below
    state = {
        numberOfRows: 9,
        numberOfColumns: 8
    }

    constructor(courseList) {
        super();
        this._days = [
            '',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ];

        this._timeSlots = [
            '08:30 - 09:50',
            '10:00 - 11:20',
            '11:30 - 12:50',
            '13:00 - 14:20',
            '14:30 - 15:50',
            '16:00 - 17:20',
            '17:30 - 18:50',
            '19:00 - 20:20',
            '20:30 - 21:50'
        ];

        this._courseList = courseList;
    }

    renderTableHeader = () => {
        return (
            <tr>
                <th key='none'>{this._days[0]}</th>
                <th key={this._days[1].substring(0, 3)}>{this._days[1]}</th>
                <th key={this._days[2].substring(0, 3)}>{this._days[2]}</th>
                <th key={this._days[3].substring(0, 3)}>{this._days[3]}</th>
                <th key={this._days[4].substring(0, 3)}>{this._days[4]}</th>
                <th key={this._days[5].substring(0, 3)}>{this._days[5]}</th>
                <th key={this._days[6].substring(0, 3)}>>{this._days[6]}</th>
            </tr>
        );
    }

    renderTableContent = () => {

    }

    render() {
        return (
            <Table>
                <thead>{this.renderTableHeader}</thead>
                <tbody>{this._courseList.map(course => {
                    this.renderTableContent(course)
                })}</tbody>
            </Table>
        );
    }
}