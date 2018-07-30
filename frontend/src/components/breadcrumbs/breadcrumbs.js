import React, { Component } from 'react';

import './breadcrumbs.css';

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Jobs",
    };
  }

  componentWillMount() {
    let path = window.location.pathname.slice(1);
    let page = path[0].toUpperCase() + path.slice(1);
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <div className="topleftnav">
        <a href="/">Home </a>
        <a>&#8688; {this.state.currentPage}</a>
      </div>
    );
  }
}

export default Breadcrumbs;
