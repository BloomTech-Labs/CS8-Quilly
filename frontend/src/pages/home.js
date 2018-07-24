import React, { Component } from "react";
import Accountlogin from "../components/accountlogin/accountlogin";
import Coverflow from "../components/coverflow/coverflow";
import Accountsignup from "../components/accountsignup/accountsignup";

class Home extends Component {
  render() {
    return (
      <div className="Homeapp">
        <Accountsignup />
        <Accountlogin />
        <div className="Coverflow">
          <Coverflow />
        </div>
        <p className="description">
          We have a huge selection of products to help you on your job hunt!
        </p>
        <p>Please view our product selection above to learn more.</p>

        <div>
          <button className="button">Buy Now</button>
        </div>
      </div>
    );
  }
}

export default Home;
