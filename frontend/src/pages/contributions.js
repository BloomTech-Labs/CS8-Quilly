import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Contribution from '../components/contribution/contribution';

class Contributionspage extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Breadcrumbs />
        <Contribution />
      </div>
    );
  }
}

export default Contributionspage;