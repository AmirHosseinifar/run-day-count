import React, { Component } from 'react'
import '../stylesheets/ui.scss'

class RunDayCount extends Component {
  render() {
    return (
      <div className="run-day-count">
        <div className="total-days">
          <span>5 days</span>
        </div>
        <div className="rain-days">
          <span>2 days</span>
        </div>
        <div className="dry-days">
          <span>3 days</span>
        </div>
      </div>
    )
  }
}

export default RunDayCount