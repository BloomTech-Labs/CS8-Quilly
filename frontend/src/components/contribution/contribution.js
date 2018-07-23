import React, { Component } from "react";
import "./contribution.css";

/*class Contribution extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Contribution Submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Contribution">
      <div>{fakeServerData.contribution.date}</div>
      <div className="ContributionForm">
        <form onSubmit={this.handleSubmit}>
            <input
              className="Date"
              type="date"
              value={this.state.value}
              required="true"
              onChange={this.handleChange}
              />
            <input
              className="Activity"
              type="text"
              placeholder="Contribution"
              required="true"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              className="Link"
              type="text"
              placeholder="Link"
              required="true"
              value={this.state.value}
              onChange={this.handleChange}
              />
            <input
              className="Notes"
              type="text"
              placeholder="Notes"
              required="true"
              value={this.state.value}
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
*/

let fakeServerData = {
  contributions: [
    {
      date: "5/10/2018",
      title: "Blog Post",
      link: "www.google.com",
      notes: "Retweeted"
    },
    {
      date: "5/11/2018",
      title: "Blof Post",
      link: "www.goofle.com",
      notes: "Retweefed"
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
      notesInput: "",
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
    console.log(`This is the stateee ${this.state}`);
    // alert("Contribution Submitted: " + this.state.value);
    // $.post("/submitFormData", {data: this.state.dateInput...}, function(res) {

    // })
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
              name="dateInput"
              value={this.state.dateInput}
              onChange={this.handleChange}
            />
            <input
              className="formActivity"
              type="text"
              placeholder="Contribution"
              required="true"
              name="titleInput"
              value={this.state.titleInput}
              onChange={this.handleChange}
            />
            <input
              className="formLink"
              type="text"
              placeholder="Link"
              required="true"
              name="linkInput"
              value={this.state.linkInput}
              onChange={this.handleChange}
            />
            <input
              className="Notes"
              type="text"
              placeholder="Notes"
              name="notesInput"
              value={this.state.notesInput}
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
