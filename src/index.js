import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RunDayCount from './components/RunDayCount';
import {App} from './components/App'
import {HashRouter, Route} from 'react-router-dom'
import {Whoops404} from './components/Whoops404'

ReactDOM.render(
  <HashRouter>
    <div>
      <Route path="/" component={App}/>
      <Route path="list-days" component={App} />
        <Route path=":filter" component={App} />
      <Route path="add-day" component={App} />
      <Route path="*" component={Whoops404}/>
    </div>
  </HashRouter>
  
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
