import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Billing from '../components/billing/billing';
import Signout from '../components/signout/signout'

class Billingpage extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <Signout {...this.props} />
        <Sidebar />
        <Breadcrumbs />
        <Billing />
      </div>
    );
  }
}

export default Billingpage;
