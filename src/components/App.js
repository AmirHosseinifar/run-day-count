
import React from 'react';
import {Component} from 'react'


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

  render() {
    return(
      <div>
        {this.state.allRunDays[1]["location"]} 
      </div>
    )
  }
}

