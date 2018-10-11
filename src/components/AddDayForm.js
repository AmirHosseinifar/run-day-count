import React from 'react'
import {Component} from 'react'
import {PropTypes} from 'prop-types'

export class AddDayForm extends Component {

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  
  submit(e) {
    e.preventDefault()
    console.log('location', this.refs.location.value)
    console.log('date', this.refs.date.value)
    console.log('rainDay', this.refs.rainDay.checked)
    console.log('dryDay', this.refs.dryDay.checked)
  }
  
  render() {
    const {location, date, rainDay, dryDay} = this.props
    return (
      <form onSubmit={this.submit} className="add-day-form">
        <label htmlFor="location">Location</label>
        <input id="location" 
               type="text" 
               required 
               defaultValue={location}
               ref="location"/>

        <label htmlFor="date">Date</label>
        <input id="date" 
               type="date" 
               required 
               defaultValue={date}
               ref="date"/>

        <div>
          <input id="rainDay" 
                 type="checkbox" 
                 defaultChecked={rainDay}
                 ref="rainDay"/>
          <label htmlFor="rainDay">Rainy Day</label>
        </div>
        <div>
          <input id="dryDay" 
                 type="checkbox" 
                 defaultChecked={dryDay}
                 ref="dryDay"/>
          <label htmlFor="dryDay">Dry Day</label>
        </div>
        <button>Add Day</button>
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


