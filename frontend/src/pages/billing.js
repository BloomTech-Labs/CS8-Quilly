import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Billing from '../components/billing/billing';
import Signout from '../components/signout/signout';

class Billingpage extends Component {
  render() {
    return (
      <div className="App">
        <Signout />
        <Sidebar />
        <Billing />
      </div>
    );
  }
}

export default Billingpage;
