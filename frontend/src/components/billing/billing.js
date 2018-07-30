import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './checkoutform';

import './billing.css';

class Billing extends Component {

  render() {
    return (
      <div className="Billing">
        <h2>Billing</h2>
        <div className="Paymentinfo">
          <br />
          <h4>Payment Info</h4>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    );
  }
}

export default Billing;
