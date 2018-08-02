import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Contribution from '../components/contribution/contribution';
import Signout from '../components/signout/signout'

class Contributionspage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Signout {...this.props} />
        <Sidebar />
        <Breadcrumbs />
        <Contribution />
      </div>
    );
  }
}

export default Contributionspage;
