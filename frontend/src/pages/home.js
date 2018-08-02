import React, { Component } from 'react';
import Accountlogin from '../components/accountlogin/accountlogin';
import Accountsignup from '../components/accountsignup/accountsignup';
import Background from '../img/background.jpg';
import Logo from '../img/Quilly Full Logo - Black Border.svg';

class Home extends Component {
  render() {
    return (
      <div className="homeApp">
        <img src={Background} className="background" alt="background" />
        <div className="homeDescription">
          <img src={Logo} id="logo" alt="logo" />

          <p>
            We have a huge selection of products to help you on your job hunt!
          </p>

          <p>Please view our product selection above to learn more.</p>
        </div>
        <br />
        <Accountsignup />
        <Accountlogin />
      </div>
    );
  }
}

export default Home;
