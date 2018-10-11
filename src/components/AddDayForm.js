import React from 'react'
import {PropTypes} from 'prop-types'

export const AddDayForm = ({location, 
                            date, 
                            rainDay, 
                            dryDay,
                            onNewDay}) => {
  let _location, _date, _rainDay, _dryDay
  const submit = (e) => {
    e.preventDefault()

    onNewDay({
      location: _location.value,
      date: _date.value,
      rainDay: _rainDay.checked,
      dryDay: _dryDay.checked
    })
    _location.value = ""
    _date.value = ""
    _rainDay.checked = false
    _dryDay.checked = false
  }
  
  return (
    <form onSubmit={submit} className="add-day-form">
      <label htmlFor="location">Location</label>
      <input id="location" 
             type="text" 
             required 
             defaultValue={location}
             ref={input => _location = input}/>

      <label htmlFor="date">Date</label>
      <input id="date" 
             type="date" 
             required 
             defaultValue={date}
             ref={input => _date = input}/>

      <div>
        <input id="rainDay" 
               type="checkbox" 
               defaultChecked={rainDay}
               ref={input => _rainDay = input}/>
        <label htmlFor="rainDay">Rainy Day</label>
      </div>
      <div>
        <input id="dryDay" 
               type="checkbox" 
               defaultChecked={dryDay}
               ref={input => _dryDay = input}/>
        <label htmlFor="dryDay">Dry Day</label>
      </div>
      <button>Add Day</button>
    </form>
  )
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


