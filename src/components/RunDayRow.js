import React from 'react';
import {IoMdRainy , IoIosSunny} from 'react-icons/io'
import {PropTypes} from 'prop-types'

export const RunDayRow = ({location, date, 
                           rainDay, dryDay}) => (
  <tr>
    <td>
      {date}
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
  date: PropTypes.string.isRequired,
  rainDay: PropTypes.bool,
  dryDay: PropTypes.bool

}