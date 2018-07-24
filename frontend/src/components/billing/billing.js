import React, { Component } from "react";
import "./billing.css";

class Billing extends Component {
  render() {
    return (
      <div className="Billing">
        <h2>Billing</h2>
        <div className="Paymentinfo">
          <h4>Payment Info</h4>

          <form>
            <br />
            <input type="text" name="CC#" placeholder="CC#" />
            <br />
            <input type="text" name="EXP" placeholder="EXP" />
            <br />
            <input type="text" name="CVV" placeholder="CVV" />
            <br />
          </form>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            1 Month Subscription - $4.99
          </label>
          <br />
          <p>Special introductory rate!</p>
        </div>
        <button className="Buynow">Buy Now</button>
      </div>
    );
  }
}

export default Billing;
