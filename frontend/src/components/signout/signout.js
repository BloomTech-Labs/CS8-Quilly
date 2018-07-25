import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./signout.css";

class Accountlogout extends Component {

  handleSubmit(event) {
    event.preventDefault();
    axios
      .get(`http://localhost:5000/user/logout`)
      .then(function (response) {
        console.log(`This is the RESPONSE: ${response}`);
      })
      .catch(function (error) {
        console.log(`HANDLE SUBMIT ERROR: ${error}!`);
      });

  }



  render() {
    return (
      <div className="Accountlogout">
        <input type="submit" value="Submit">
          <p>sign out</p>

        </input>

      </div>
    );
  }
}

export default Accountlogout;
