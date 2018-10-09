import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RunDayCount from './components/RunDayCount';
import {App} from './components/App'

ReactDOM.render(
  <div>
    <RunDayCount total={50}
                rainDay={30}
                dryDay={10}                             
                goal={100}
    />
    <App />
  </div>
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
