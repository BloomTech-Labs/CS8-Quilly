import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Homepage from './pages/home.js';
import Joblistpage from './pages/joblist';
import Meetupspage from './pages/meetups';
import Contributionspage from './pages/contributions';
import Billingpage from './pages/billing';
import Settingspage from './pages/settings';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/joblist" component={Joblistpage} />
      <Route path="/meetups" component={Meetupspage} />
      <Route path="/contributions" component={Contributionspage} />
      <Route path="/billing" component={Billingpage} />
      <Route path="/settings" component={Settingspage} />
    </div>
  </Router>,

  document.getElementById('root')
);

registerServiceWorker();
