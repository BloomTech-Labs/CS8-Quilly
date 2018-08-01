import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './sidebar.css';

class Sidebar extends Component {

  render() {
    return (
      <div className="Sidebar">
        {/* <Link to="/">Home</Link> */}
        <Link to="/jobs">Jobs</Link>
        <Link to="/meetups">Meetups</Link>
        <Link to="/contributions">Contributions</Link>
        <Link to="/billing">Billing</Link>
        <Link to="/settings">Settings</Link>
      </div>
    );
  }
}

export default Sidebar;
