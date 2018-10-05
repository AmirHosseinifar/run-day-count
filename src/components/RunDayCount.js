import React, { Component } from 'react'
import '../stylesheets/ui.scss'

class RunDayCount extends Component {

  percentToDecimal(decimal) {
    return ( (decimal*100) + '%')
  }

  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  }

  render() {
    return (
      <div className="run-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
          <span>days</span>
        </div>
        <div className="rain-days">
          <span>{this.props.rainDay}</span>
          <span>days</span>
        </div>
        <div className="dry-days">
          <span>{this.props.dryDay}</span>
          <span>days</span>
        </div>
        <div>
          <span>{this.calcGoalProgress(this.props.total, 
                                       this.props.goal)}
          </span>
        </div>
      </div>
    )
  }
}

export default RunDayCount