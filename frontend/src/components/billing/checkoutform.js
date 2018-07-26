import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import axios from 'axios';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseCompleted: false
    };
    this.submit = this.submit.bind(this);
  }


  submit(event) {
    this.props.stripe.createToken({ name: "Name" }) // add name/address fields, see here for details: https://stripe.com/docs/stripe-js/reference#stripe-create-token
      .then(result => {
        console.log('RESULT: ', result.token);
        if (result.token) {
          // edit here after backend is finished
          axios.post("http://localhost:5000/user/billing/charge", { data: result.token.id })
            .then(res => {
              if (res.ok) {
                console.log("Successful payment");
                this.setState({ purchaseCompleted: true });
              }
            });
        } else {
          console.log("Error creating token");
        }
      });
  }

  render() {
    if (this.state.purchaseCompleted) return <h1>Purchase Completed</h1>;
    return (
      <div className="checkout">
        <p>Subscribe to the Basic Plan at our special introductory rate of $4.99/mo!</p>
        <CardElement />
        <button onClick={this.submit}>Buy Now</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
