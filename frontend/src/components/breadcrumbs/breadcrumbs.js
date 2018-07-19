import React, { Component } from 'react';
import './breadcrumbs.css';

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="topleftnav">
        <a href="/">Home </a>
        <a> &#8688; Jobs</a>
      </div>
    );
  }
}

export default Breadcrumbs;
