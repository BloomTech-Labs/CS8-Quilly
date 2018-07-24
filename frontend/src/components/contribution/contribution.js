import React, { Component } from "react";
import "./contribution.css";
import axios from "axios";

let fakeServerData = {
  contributions: [
    {
      date: "",
      title: "",
      link: "",
      notes: ""
    }
  ]
};

class Contribution extends Component {
  constructor() {
    super();

    this.state = {
      serverData: {},
      dateInput: "",
      titleInput: "",
      linkInput: "",
      notesInput: ""
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
      .post(`http://localhost:5000/user/contributions/add`, {
        date: this.state.date,
        contribution: this.state.contribution,
        link: this.state.link,
        notes: this.state.notes
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
    console.log(this.state);
    return (
      <div className="ContributionComponents">
        <div className="contributions">
          {/* Displaying over user's contributions -- will display nothing if no input given */}
          {this.state.serverData.contributions.map(function(contribution) {
            return (
              <div key={contribution.title}>
                <div className="date">{contribution.date}</div>
                <div className="title">{contribution.title}</div>
                <div className="notes">{contribution.notes}</div>
              </div>
            );
          })}
        </div>

        {/* Form Component */}
        <div className="ContributionForm">
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

export default Contribution;
