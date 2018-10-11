import React from 'react';
import {IoMdRainy , IoIosSunny} from 'react-icons/io'
import {PropTypes} from 'prop-types'

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

RunDayRow.propTypes = {
  location: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  rainDay: PropTypes.bool,
  dryDay: PropTypes.bool

}