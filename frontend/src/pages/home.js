import React from 'react';
import Accountlogin from '../components/accountlogin/accountlogin';
import Accountsignup from '../components/accountsignup/accountsignup';
import Background from '../img/background(6).jpg';
import Logo from '../img/Quilly Full Logo - Black Border.svg';

const Homepage = (props) => {
  return (
    <div className="homeApp">
      <img src={Background} className="background" alt="background" />
      <div className="homeDescription">
        <img src={Logo} id="logo" alt="logo" />

        <p>Need help visualizing your job search?</p>

        <p>
          Our tools will help you on your journey of landing your dream job.
        </p>
      </div>
      <br />
      <Accountsignup {...props} />
      <Accountlogin {...props} />
    </div>
  );
};

export default Homepage;
