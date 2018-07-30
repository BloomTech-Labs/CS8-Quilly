import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Meetup from '../components/meetup/meetup';
import Signout from '../components/signout/signout'

class Meetupspage extends Component {
  render() {
    return (
      <div className="App">
        <Signout />
        <Sidebar />
        <Breadcrumbs />
        <Meetup />
      </div>
    );
  }
}

export default Meetupspage;
