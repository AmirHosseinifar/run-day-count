import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RunDayCount from './components/RunDayCount';
import {RunDayList} from './components/RunDayList'

ReactDOM.render(
  <div>
    <RunDayCount total={50}
                rainDay={30}
                dryDay={10}                             
                goal={100}
    />
    <RunDayList days={
      [
        {
          location: "North Vancouver", 
          date: new Date("10/08/2018"),
          rainDay:true,
          dryDay: false
        },
        {
          location: "Vancouver", 
          date: new Date("10/06/2018"),
          rainDay:false,
          dryDay: true
        },
        {
          location: "West Vancouver", 
          date: new Date("10/01/2018"),
          rainDay:true,
          dryDay: false
        }
      ]
    }
    />
  </div>
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
