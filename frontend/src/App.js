import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import axios from 'axios';

import Homepage from './pages/home.js';
import Joblistpage from './pages/jobs';
import Meetupspage from './pages/meetups';
import Contributionspage from './pages/contributions';
import Billingpage from './pages/billing';
import Settingspage from './pages/settings';
import { StripeProvider } from 'react-stripe-elements';
import PrivateRoute from './privateRoute.js';
import config from './config/config';

const stripeKey = config.stripe.publicKey;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillMount() {
    axios.get(`${config.serverUrl}/user`)
      .then(response => {
        if (response) {
          this.setState({ isAuthenticated: true });
        }
      })
      .catch(error => {
      });
  }

  handleLogin() {
    this.setState({ isAuthenticated: true });
  }

  render() {
    if (this.state.isAuthenticated === true) {
      this.props.history.push('/jobs');
    }
    return (
      <Router {...this.props}>
        <div>
          <Route exact path="/" render={(props) => <Homepage handleLogin={this.handleLogin} {...this.props} /> } />
          <PrivateRoute path="/jobs" component={Joblistpage} isAuthenticated={this.state.isAuthenticated} {...this.props} />
          <PrivateRoute path="/meetups" component={Meetupspage} isAuthenticated={this.state.isAuthenticated} {...this.props} />
          <PrivateRoute path="/contributions" component={Contributionspage} isAuthenticated={this.state.isAuthenticated} {...this.props} />
          <StripeProvider apiKey={stripeKey}>
            <PrivateRoute path="/billing" component={Billingpage} isAuthenticated={this.state.isAuthenticated} {...this.props} />
          </StripeProvider>
          <PrivateRoute path="/settings" component={Settingspage} isAuthenticated={this.state.isAuthenticated} {...this.props} />
        </div>
      </Router>
    );
  }
}

export default App;
