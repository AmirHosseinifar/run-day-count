import React from 'react'
import {Component} from 'react'
import {PropTypes} from 'prop-types'

export class AddDayForm extends Component {
  render() {

    const {location, date, rainDay, dryDay} = this.props
    return (
      <form className="add-day-form">
        <label htmlFor="location">Location</label>
        <input id="location" type="text" required defaultValue={location}/>

        <label htmlFor="date">Date</label>
        <input id="date" type="date" required defaultValue={date}/>

        <div>
          <input id="rainDay" type="checkbox" defaultChecked={rainDay}/>
          <label htmlFor="rainDay">Rainy Day</label>
        </div>
        <div>
          <input id="dryDay" type="checkbox" defaultChecked={dryDay}/>
          <label htmlFor="dryDay">Dry Day</label>
        </div>
      </form>
    )
  }
}

AddDayForm.defaultProps = {
  location: "Vancouver",
  date: "2018-08-10",
  rainDay: true,
  dryDay: false
}

AddDayForm.propTypes = {
	location: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	rainDay: PropTypes.bool.isRequired,
	dryDay: PropTypes.bool.isRequired
}


