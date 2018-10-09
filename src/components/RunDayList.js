import React from 'react';
import {FaCalendarAlt} from 'react-icons/fa'
import {IoMdRainy , IoIosSunny} from 'react-icons/io'
import {RunDayRow} from './RunDayRow'

export const RunDayList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Location</th>
        <th>Dry Day</th>
        <th>Rainy Day</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) =>
        <RunDayRow key={i}
                   date={day.date}
                   location={day.location}
                   rainDay={day.rainDay}
                   dryDay={day.dryDay} />
        )}
    </tbody>
  </table>

)

