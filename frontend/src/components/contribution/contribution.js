import React, { Component } from 'react';
import axios from 'axios';

import './contribution.css';
import config from '../../config/config';

class Contribution extends Component {
  constructor() {
    super();

    this.state = {
      serverData: [],
      date: '',
      contribution: '',
      link: '',
      notes: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${config.serverUrl}/user/contributions`)
      .then(response => {
        this.setState({ serverData: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let serverPort = {
      date: this.state.date,
      contribution: this.state.contribution,
      link: this.state.link,
      notes: this.state.notes
    };

    axios
      .post(`${config.serverUrl}/user/contributions/add`, serverPort)
      .then(res => {
        console.log(res);
        let temp = this.state.serverData;
        temp.push(serverPort);
        this.setState({ serverData: temp });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="ContributionComponents">
        <div className="contributions">
          {/* Displaying over user's contributions -- will display nothing if no input given */}
          {this.state.serverData.map(function (contribution) {
            return (
              <div className="contributionsData">
                <div className="date">{contribution.date.slice(0, 10)}</div>
                <div className="contribution">{contribution.contribution}</div>
                <div className="link">
                  <a href={contribution.link}>
                    <span role="img" aria-label="link emoji">
                      &#x1f517;
                    </span>
                  </a>
                </div>
                <div className="notes">{contribution.notes}</div>
              </div>
            );
          })}
        </div>

        {/* Form Component */}
        <div className="ContributionForm">
          <form onSubmit={this.handleSubmit} className="FormSubmit">
            <input
              className="formDate"
              required="true"
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input
              className="formActivity"
              type="text"
              placeholder="Contribution"
              required="true"
              name="contribution"
              value={this.state.contribution}
              onChange={this.handleChange}
            />
            <input
              className="formLink"
              type="text"
              placeholder="Link"
              required="true"
              name="link"
              value={this.state.link}
              onChange={this.handleChange}
            />
            <input
              className="formNotes"
              type="text"
              placeholder="Notes"
              name="notes"
              value={this.state.notes}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contribution;
