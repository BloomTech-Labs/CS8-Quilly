import React, { Component } from 'react';
import axios from 'axios';

import config from '../../config/config';
import './meetup.css';

axios.defaults.withCredentials = true;

class Meetup extends Component {
  constructor() {
    super();

    this.state = {
      serverData: [],
      date: '',
      activity: '',
      link: '',
      notes: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${config.serverUrl}/user/meetups`)
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

    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
<<<<<<< HEAD

    // let serverPort = {
    //   date: this.state.date,
    //   activity: this.state.activity,
    //   link: this.state.link,
    //   notes: this.state.notes
    // };
=======
>>>>>>> 176f14add6fa1df21109fb87af8d337783840a90
    axios
      .post(`${config.serverUrl}/user/meetups/add`, {
        date: this.state.date,
        activity: this.state.activity,
        link: this.state.link,
        notes: this.state.notes
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="MeetupComponents">
        <div className="meetups">
          {/* Displaying over user's meetups -- will display nothing if no input given */}
          {this.state.serverData.map(function (meetup) {
            return (
              <div className="meetupsData">
                <p className="date">{meetup.date}</p>
                <p className="activity">{meetup.activity}</p>
                <p className="link">
                  <a href={meetup.link}>
                    <span role="img">&#x1f517;</span>
                  </a>
                </p>
                <p className="notes">{meetup.notes}</p>
              </div>
            );
          })}
        </div>
        {/* Form Component */}
        <div>
          <form onSubmit={this.handleSubmit} className="MeetupForm">
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
              placeholder="Meetup"
              required="true"
              name="activity"
              value={this.state.activity}
              onChange={this.handleChange}
            />
            <input
              className="formLink"
              type="text"
              placeholder="Link &#x1f517;"
              name="link"
              value={this.state.link}
              onChange={this.handleChange}
            />
            <input
              className="Notes"
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

export default Meetup;
