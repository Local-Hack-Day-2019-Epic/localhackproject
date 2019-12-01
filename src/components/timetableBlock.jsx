import React, {Component} from 'react';


export default class TimetableBlock extends Component{
    state = {
        empty: true
    }

    /**
     * 
     * @param {string} courseCode 
     * @param {string} courseType 
     * @param {string} section 
     * @param {string} startTime 
     * @param {string} endTime 
     * @param {string} prof 
     */
    constructor(courseCode, courseType, section, startTime, endTime, prof){
        super();

        if (courseCode || courseType || section || startTime || endTime || prof)
            this.state.empty = false;

        this.courseCode = courseCode;
        this.courseType = courseType;
        this.section = section;
        this.startTime = startTime;
        this.endTime = endTime;
        this.profTeaching = prof;
    }

    isEmpty = () => {
        return this.state.empty;
    }
    
    render(){
        return (
            <div>
                {!this.state.empty?
                <span style={{ fontSize: 15 }} className='badge m-2 badge-warning'>
                    <p>Course code: {this.courseCode} - {this.section}</p>
                    <p>{this.courseType}</p>
                    <p>{this.startTime} - {this.endTime}</p>
                    <p>{this.profTeaching}</p>
                </span>
                :
                <span style={{ fontSize: 15 }} className='badge m-2 badge-primary'>
                    <p> </p>
                    <p> </p>
                    <p> </p>
                    <p> </p>
                </span>
                }
            </div>
        )
    }
}