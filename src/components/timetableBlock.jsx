import React, {Component} from 'react';


export default class TimetableBlock extends React.Component {
    state = {
        empty: undefined
    }

    constructor(empty){
        super(empty)
        this.state.empty = empty;
        this._courseInfo = {
            courseType: {
                lab: false,
                lecture: false,
                dgd: false,
                tutorial: false
            },
            startTime: null,
            endTime: null,
            profTeaching: null,
            
            // endTime: startTime => {
            //     let hours = parseInt(startTime.substring(0, 2));
            //     let minutes = parseInt(startTime.substring(3, 5));

            //     hours += 1;
            //     minutes += 20;
                
            //     while (minutes > 60){
            //         minutes -= 60;
            //         hours += 1;
            //     }

            //     return (hours < 10? '0': '') + hours + ':' + minutes;
            // }

        }
    }
    
    render(){
        return null;
    }
}