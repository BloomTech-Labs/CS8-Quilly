import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './history';

import Homepage from './pages/home.js';
import Joblistpage from './pages/jobs';
import Meetupspage from './pages/meetups';
import Contributionspage from './pages/contributions';
import Billingpage from './pages/billing';
import Settingspage from './pages/settings';
import { StripeProvider } from 'react-stripe-elements';
import config from './config/config';
import './index.css';

const stripeKey = config.stripe.publicKey;

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/jobs" component={Joblistpage} />
      <Route path="/meetups" component={Meetupspage} />
      <Route path="/contributions" component={Contributionspage} />
      <StripeProvider apiKey={stripeKey}>
        <Route path="/billing" component={Billingpage} />
      </StripeProvider>
      <Route path="/settings" component={Settingspage} />
    </div>
  </Router>,

  document.getElementById('root')
);
