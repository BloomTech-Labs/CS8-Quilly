import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      //side navigation  bar
      <div className="Sidebar"> 
        <a href="#">Jobs</a>
        <a href="#">Meetups</a>
        <a href="#">Contributions</a>
        <a href="#">Billing</a>
        <a href="#">Setting</a>
      </div>
    );
  }
}

export default Sidebar;
