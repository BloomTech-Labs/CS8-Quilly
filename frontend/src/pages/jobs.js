import React, { Component } from 'react';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Sidebar from '../components/sidebar/sidebar';
import Jobboard from '../components/jobboard/jobboard';
import Jobcreatemodal from '../components/jobcreatemodal/jobcreatemodal';
import Signout from '../components/signout/signout'
import config from '../config/config';
import axios from 'axios';

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

  componentDidMount() {
    const lists = {
      wishlist: [],
      applied: [],
      phone: [],
      "on site": [],
      offer: [],
      rejected: [],
    }

    axios
      .get(`${config.serverUrl}/user`)
      .then(user => {
        console.log('fetching data from server');
        let applications = user.data.applications;
        applications.forEach(application => {
          let category = application.category;
          if (!lists[category]) {
            lists[category] = [];
          }
          lists[category].push(application);
        });
      })
      .then(() => this.setState({ lists: lists }))
      .catch(err => console.error(err));
  }

  handleJobChange(lists) {
    console.log('lists on jobs page',lists)
    this.setState({ lists: lists });
    console.log(this.state.lists);
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