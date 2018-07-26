import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Settings from '../components/settings/settings';
import Signout from '../components/signout/signout'

class Settingspage extends Component {
  render() {
    return (
      <div className="App">
        <Signout />
        <Sidebar />
        <Breadcrumbs />
        <Settings />
      </div>
    );
  }
}

export default Settingspage;
