import React, { Component } from 'react';

class JobCard extends Component {
  render() {
    const {title} = this.props

    return (
      <div className="card well">
        {title}
      </div>
    );
  }
}

export default JobCard;