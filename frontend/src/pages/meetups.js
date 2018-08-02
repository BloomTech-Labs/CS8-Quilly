import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Meetup from '../components/meetup/meetup';
import Signout from '../components/signout/signout'

class Meetupspage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Signout {...this.props} />
        <Sidebar />
        <Breadcrumbs />
        <Meetup />
      </div>
    );
  }
}

export default Meetupspage;
