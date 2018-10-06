import React from 'react'
import '../stylesheets/ui.scss'



  const percentToDecimal = (decimal) => {
    return ( (decimal*100) + '%')
  }

  const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
  }

  const RunDayCount = ({total, rainDay, dryDay, goal}) => {
    return (
      <div className="run-day-count">
        <div className="total-days">
          <span>{total}</span>
          <span>days</span>
        </div>
        <div className="rain-days">
          <span>{rainDay}</span>
          <span>days</span>
        </div>
        <div className="dry-days">
          <span>{dryDay}</span>
          <span>days</span>
        </div>
        <div>
          <span>{calcGoalProgress(total, goal)}
          </span>
        </div>
      </div>
    )
  }


export default RunDayCount