import React from 'react';
import {FaCalendarAlt} from 'react-icons/fa'
import {IoMdRainy , IoIosSunny} from 'react-icons/io'


export const RunDayRow = ({location, date, 
                           rainDay, dryDay}) => (
  <tr>
    <td>
      {date.getMonth()+1}/{date.getDate()}/
		  {date.getFullYear()}
    </td>
    <td>
      {location}
    </td>
    <td>
      {(dryDay) ? <IoIosSunny /> : null}
    </td>
    <td>
      {(rainDay) ? <IoMdRainy /> : null}
    </td>
  </tr>

)