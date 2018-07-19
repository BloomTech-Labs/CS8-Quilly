import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Billing from '../components/billing/billing';

class Billingpage extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Breadcrumbs />
        <Billing />
      </div>
    );
  }
}

export default Billingpage;
