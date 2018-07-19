import React, { Component } from 'react';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Sidebar from '../components/sidebar/sidebar';

import Jobboard from '../components/jobboard/jobboard';
import Jobcreatemodal from '../components/jobcreatemodal/jobcreatemodal';

class Joblistpage extends Component {
  render() {
    return (
      <div className="App">
        <Breadcrumbs />
        <Sidebar />
        <Jobboard />
        <Jobcreatemodal />
      </div>
    );
  }
}

export default Joblistpage;
