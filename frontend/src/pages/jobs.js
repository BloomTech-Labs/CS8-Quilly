import React, { Component } from 'react';
import axios from 'axios';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Sidebar from '../components/sidebar/sidebar';

import Jobboard from '../components/jobboard/jobboard';
import Jobcreatemodal from '../components/jobcreatemodal/jobcreatemodal';

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
        rejected: []
      }
    };

    this.handleJobChange = this.handleJobChange.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/user')
      .then(user => {
        let applications = user.data.applications;
        let lists = this.state.lists;

        applications.forEach(application => {
          let category = application.category;
          if (!lists[category]) {
            lists[category] = [];
          }
          lists[category].push(application);
        });

        this.setState({ lists: lists });
      })
      .catch(err => console.error(err));
  }

  handleJobChange(lists) {
    this.setState({ lists: lists });
  }

  render() {
    return (
      <div className="App">
        <Breadcrumbs />
        <Sidebar />
        <Jobboard jobs={this.state.lists} />
        <Jobcreatemodal jobs={this.state.lists} handleJobChange={this.handleJobChange} />
      </div>
    );
  }
}

export default Joblistpage;
