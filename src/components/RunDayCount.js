import React from 'react'
import '../stylesheets/ui.scss'
import {FaCalendarAlt} from 'react-icons/fa'
import {IoMdRainy , IoIosSunny} from 'react-icons/io'


  const percentToDecimal = (decimal) => {
    return ( (decimal*100) + '%')
  }

  const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
  }

  const RunDayCount = ({total=50, rainDay=20,
                        dryDay=10, goal=80}) => {
    return (
      <div className="run-day-count">
        <div className="total-days">
          <span>{total}</span>
          <FaCalendarAlt />
          <span>days</span>
        </div>
        <div className="rain-days">
          <span>{rainDay}</span>
          <IoMdRainy /> 
          <span>days</span>
        </div>
        <div className="dry-days">
          <span>{dryDay}</span>
          <IoIosSunny />
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