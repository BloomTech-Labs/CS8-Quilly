import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Settings from '../components/settings/settings';
import Signout from '../components/signout/signout'

class Settingspage extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <Signout {...this.props} />
        <Sidebar />
        <Breadcrumbs />
        <Settings />
      </div>
    );
  }
}

export default Settingspage;
