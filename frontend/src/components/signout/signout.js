import React, { Component } from 'react';
import axios from 'axios';

import config from '../../config/config';
import './signout.css';

class Accountlogout extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .get(`${config.serverUrl}/user/logout`)
      .then(function(response) {
        console.log(`This is the LOGOUT RESPONSE: `, response);
        this.props.history.replace('/');
      })
      .catch(function(error) {
        console.log(`HANDLE SUBMIT ERROR: ${error}!`);
      });
  }

  render() {
    return (
      <div className="Accountlogout">
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Signout" className="signoutBtn" />
        </form>
      </div>
    );
  }
}

export default Accountlogout;
