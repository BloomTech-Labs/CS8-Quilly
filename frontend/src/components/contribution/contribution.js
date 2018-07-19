import React, { Component } from 'react';

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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Contribution">
      Contributions
        <form onSubmit={this.handleSubmit}>
          <label>
            Date:
            <input
              type="date"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Activity"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Link"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Notes"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contribution;
