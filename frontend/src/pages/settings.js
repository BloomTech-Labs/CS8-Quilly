import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Settings from '../components/settings/settings';
import Signout from '../components/signout/signout';

class Settingspage extends Component {
  render() {
    return (
      <div className="App">
        <Signout />
        <Sidebar />
        <Settings />
      </div>
    );
  }
}

export default Settingspage;
