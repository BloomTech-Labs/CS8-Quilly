import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Meetup from '../components/meetup/meetup';

class Meetupspage extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Breadcrumbs />
        <Meetup />
      </div>
    );
  }
}

export default Meetupspage;
