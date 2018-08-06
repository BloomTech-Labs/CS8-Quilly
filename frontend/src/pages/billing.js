import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Billing from '../components/billing/billing';
import Signout from '../components/signout/signout';

const Billingpage = (props) => {
    return (
      <div className="App">
        <Signout {...props} />
        <Sidebar />
        <Billing />
      </div>
    );
};

export default Billingpage;
