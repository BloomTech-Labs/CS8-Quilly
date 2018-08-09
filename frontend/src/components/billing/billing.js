import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './checkoutform';

import './billing.css';

class Billing extends Component {
  render() {
    return (
      <div className="Billing">
        <div className="Paymentinfo">
          <h4>Payment Info</h4>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>

        <div className="PlanDetails">
          <h4>Basic Plan</h4>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."</p>
        </div>
      </div>
    );
  }
}

export default Billing;
