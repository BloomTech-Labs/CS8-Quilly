import React, { Component } from "react";
import axios from "axios";
import "./meetup.css";

let fakeServerData = {
  meetups: [
    {
      date: "5/10/2018",
      activity: "Blog Post",
      link: "www.google.com",
      notes: "Retweeted"
    },
    {
      date: "5/11/2018",
      activity: "Blof Post",
      link: "www.goofle.com",
      notes: "Retweefed"
    }
  ]
};

class Meetup extends Component {
  constructor() {
    super();

    this.state = {
      serverData: {},
      date: "",
      activity: "",
      link: "",
      notes: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ serverData: fakeServerData });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    axios
      .post(`localhost:5000/user/meetups/add`, {
        date: this.state.date,
        activity: this.state.activity,
        link: this.state.link,
        notes: this.state.note
      })
      .then(function(response) {
        console.log(`This is the RESPONSE: ${response}`);
      })
      .catch(function(error) {
        console.log(`ERROR: ${error}!`);
      });

    event.preventDefault();
  }



  render() {
    // console.log(this.state);
    return (
      <div className="MeetupComponents">
        <div className="meetupss">
          {/* Displaying over user's meetups -- will display nothing if no input given */}
          {this.state.serverData.meetups.map(function(meetup) {
            return (
              <div key={meetup.activity}>
                <div className="date">{meetup.date}</div>
                <div className="activity">{meetup.activity}</div>
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
              required="true"
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
