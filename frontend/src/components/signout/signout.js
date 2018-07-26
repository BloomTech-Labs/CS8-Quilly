import React, { Component } from "react";
import axios from "axios";
import "./signout.css";

class Accountlogout extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    axios
      .get(`http://localhost:5000/user/logout`)
      .then(function (response) {
        console.log(`This is the LOGOUT RESPONSE: `, response);
      })
      .catch(function (error) {
        console.log(`HANDLE SUBMIT ERROR: ${error}!`);
      });
  }



  render() {
    return (
      <div className="Accountlogout">
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Submit" />
          <label>sign out</label>
        </form>

      </div>
    );
  }
}

export default Accountlogout;
