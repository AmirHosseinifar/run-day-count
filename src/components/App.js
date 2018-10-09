import React from 'react';
import {Component} from 'react'
import {RunDayList} from './RunDayList'
import {RunDayCount} from './RunDayCount'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRunDays: [
        {
          location: "North Vancouver", 
          date: new Date("10/08/2018"),
          rainDay:true,
          dryDay: false
        },
        {
          location: "Vancouver", 
          date: new Date("10/06/2018"),
          rainDay:false,
          dryDay: true
        },
        {
          location: "West Vancouver", 
          date: new Date("10/01/2018"),
          rainDay:true,
          dryDay: false
        }
      ]
    };
  }

  countDays(filter) {
    return this.state.allRunDays.filter(
      (day) => (filter) ? day[filter] : day).length
  }

  render() {
    return(
      <div className="app">
        <RunDayList days={this.state.allRunDays}/>
        <RunDayCount total={this.countDays()}
                     rainDay={this.countDays("rainDay")}
                     dryDay={this.countDays("dryDay")}/>
      </div>
    )
  }
}

