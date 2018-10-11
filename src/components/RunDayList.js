import React from 'react';
import {RunDayRow} from './RunDayRow'
import {Link} from 'react-router-dom'

export const RunDayList = ({days, filter}) => {
  const filteredDays = (!filter ||
        !filter.match(/rainDay|dryDay/)) ? 
        days:
        days.filter(day => day[filter])

  return(
    <div className="run-day-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Dry Day</th>
            <th>Rainy Day</th>
          </tr>
          <tr>
            <td>
              <td colSpan={4}>
                <Link to="/list-days">
                  All Days
                </Link>
                <Link to="/list-days/rainDay">
                  Rainy Days
                </Link>
                <Link to="/list-days/dryDay">
                  Dry Days
                </Link>
              </td>
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredDays.map((day, i) =>
            <RunDayRow key={i}
                      {...day} />
            )}
        </tbody>
      </table>
    </div>
  )
}

RunDayList.propTypes = {
  days: function(props) {
    if (!Array.isArray(props.days)) {
      return new Error(
        "RunDayList must have at least one record"
      )
    } else if(!props.days.length) {
      return new Error(
        "RunDayList must have at least one record"
      )
    } else {
      return null
    }
  }
}

