import React, { Component } from "react";
import axios from "axios";
import "./meetup.css";

axios.defaults.withCredentials = true;

class Meetup extends Component {
  constructor() {
    super();

    this.state = {
      serverData: [],
      date: "",
      activity: "",
      link: "",
      notes: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/user/meetups")
      .then(response => {
        this.setState({ serverData: response.data });
      })
      .catch(function(error) {
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

    let serverPort = {
      date: this.state.date,
      activity: this.state.activity,
      link: this.state.link,
      notes: this.state.notes
    };

    axios
      .post(`http://localhost:5000/user/meetups/add`, serverPort)
      .then(res => {
        console.log(`RES.DATA: ${res.data}`);
        console.log(`SERVERPORT: ${serverPort}`);
        console.log(`STATE: ${this.state}`);
        let temp = this.state.serverData;
        temp.push(serverPort);
        this.setState({ serverData: temp });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="MeetupComponents">
        <div className="meetups">
          {/* Displaying over user's meetups -- will display nothing if no input given */}
          {this.state.serverData.map(function(meetup) {
            return (
              <div key={meetup.activity}>
                <div className="date">{meetup.date}</div>
                <div className="activity">{meetup.activity}</div>
                <div className="link">{meetup.link}</div>
                <div className="notes">{meetup.notes}</div>
              </div>
            );
          })}
        </div>

        {/* Form Component */}
        <div className="MeetupForm">
          <form onSubmit={this.handleSubmit}>
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
              placeholder="Link"
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
