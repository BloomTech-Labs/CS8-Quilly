import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './accountlogin.css';

class Accountlogin extends Component {
  render() {
    return (
      <div className="Accountlogin">
        <Link to="/">Sign Up</Link>
        <Link to="/jobs">Sign In</Link>
      </div>
    );
  }
}

export default Accountlogin;
