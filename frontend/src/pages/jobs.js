import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Jobboard from '../components/jobboard/jobboard';
import Jobcreatemodal from '../components/jobcreatemodal/jobcreatemodal';
import Jobeditmodal from '../components/jobeditmodal/jobeditmodal';
import Jobdeletemodal from '../components/jobdeletemodal/jobdeletemodal'
import Signout from '../components/signout/signout';
import config from '../config/config';
import axios from 'axios';

class Joblistpage extends Component {
  constructor(props) {
    super(props);
    this.editModal = React.createRef();
    this.deleteModal = React.createRef();
    this.jobboard = React.createRef();
    this.state = {
      lists: {
        wishlist: [],
        applied: [],
        phone: [],
        'on site': [],
        offer: [],
        rejected: []
      }
    };

    this.handleJobChange = this.handleJobChange.bind(this);
  }

  componentDidMount() {
    const lists = {
      wishlist: [],
      applied: [],
      phone: [],
      'on site': [],
      offer: [],
      rejected: []
    };
    console.log('Fetching inital data from server');
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
    console.log('handleJobChange');
    this.setState({ lists: lists });
    this.jobboard.current.forceUpdate();
  }

  openEditModal = jobInfo => {
    this.editModal.current.openModal(jobInfo);
  };

  openDeleteModal = jobId => {
    this.deleteModal.current.openModal(jobId);
  };

  render() {
    return (
      <div className="App">

        <Signout {...this.props} />
        <Sidebar />
        <Jobboard jobs={this.state.lists} handleJobChange={this.handleJobChange} openEditModal={this.openEditModal} openDeleteModal={this.openDeleteModal} ref={this.jobboard}/>
        <Jobcreatemodal jobs={this.state.lists} handleJobChange={this.handleJobChange} />
        <Jobeditmodal ref={this.editModal} jobs={this.state.lists} handleJobChange={this.handleJobChange} />
        <Jobdeletemodal ref={this.deleteModal} handleJobChange={this.handleJobChange} />
      </div>
    );
  }
}

export default Joblistpage;
