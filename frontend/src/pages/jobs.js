import React, { Component } from 'react';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Sidebar from '../components/sidebar/sidebar';
import Jobboard from '../components/jobboard/jobboard';
import Jobcreatemodal from '../components/jobcreatemodal/jobcreatemodal';
import Signout from '../components/signout/signout'

class Joblistpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: {
        wishlist: [],
        applied: [],
        phone: [],
        "on site": [],
        offer: [],
        rejected: [],
      }
    };

    this.handleJobChange = this.handleJobChange.bind(this);
  }

  handleJobChange(lists) {
    this.setState({ lists: lists });
  }

  render() {
    return (
      <div className="App">
        <Signout />
        <Breadcrumbs />
        <Sidebar />
        <Jobboard jobs={this.state.lists} handleJobChange={this.handleJobChange} />
        <Jobcreatemodal jobs={this.state.lists} handleJobChange={this.handleJobChange} />
      </div>
    );
  }
}

export default Joblistpage;
