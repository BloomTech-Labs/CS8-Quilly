import React, { Component } from 'react';
import './contribution.css';

let fakeServerData = {
  contribution: { 
    date: 'May 1, 1000'
  },
};

class Contribution extends Component {
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
