import React from 'react';
import {Component} from 'react'
import {RunDayList} from './RunDayList'
import {RunDayCount} from './RunDayCount'
import {AddDayForm} from './AddDayForm'
import {Menu} from './Menu'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRunDays: [
        {
          location: "North Vancouver", 
          date: "2016-01-02",
          rainDay:true,
          dryDay: false
        }
      ]
    }
    this.addDay = this.addDay.bind(this)
  }

  addDay(newDay) {
    this.setState({
      allRunDays: [
        ...this.state.allRunDays,
        newDay
      ]
    })
  }

  countDays(filter) {
    return this.state.allRunDays.filter(
      (day) => (filter) ? day[filter] : day).length
  }

  render() {
    return(
      <div className="app">
      <Menu />
      {(this.props.location.pathname === "/" ) ?
        <RunDayCount total={this.countDays()}
                     rainDay={this.countDays("rainDay")}
                     dryDay={this.countDays("dryDay")}/> :
       (this.props.location.pathname === "/add-day") ?
        <AddDayForm onNewDay={this.addDay}/> :
        <RunDayList days={this.state.allRunDays}
                    // filter={this.props.params.filter}
        />
      }

      </div>
    )
  }
}

