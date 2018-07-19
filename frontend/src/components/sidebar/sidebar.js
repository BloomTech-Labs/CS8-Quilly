import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <a href="joblist">Jobs</a>
        <a href="meetups">Meetups</a>
        <a href="contributions">Contributions</a>
        <a href="billing">Billing</a>
        <a href="settings">Settings</a>
      </div>
    );
  }
}

export default Sidebar;
