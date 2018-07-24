import React, { Component } from "react";
import "./accountsignup.css";
import Modal from "react-modal";
import axios from "axios";

let fakeServerData = {
  users: [
    {
      username: "aa",
      password: "123",
      email: "aa@aa.com",
      firstname: "aa",
      lastname: "aa"
    },
    {
      username: "bb",
      password: "123",
      email: "bb@bb.com",
      firstname: "bb",
      lastname: "bb"
    }
  ]
};

class Accountsignup extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      username: "",
      password: "",
      email: "",
      firstname: "",
      lastname: ""
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

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

    console.log(this.state);
  }

  handleSubmit(event) {
    axios
      .post(`http://localhost:5000/user/register`, {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        firstname: this.state.firstname,
        lastname: this.state.lastname
      })
      .then(function(response) {
        console.log(`This is the RESPONSE: ${response}`);
      })
      .catch(function(error) {
        console.log(`HANDLE SUBMIT ERROR: ${error}!`);
      });

    event.preventDefault();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="Accountsignup">
        <button className="openModal" onClick={this.openModal}>
          Sign Up
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
          className="hello"
        >
          <div className="signupmodal">
            <h2>Sign Up</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                placeholder="username"
                className="formUsername"
                type="text"
                required="true"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <input
                placeholder="password"
                className="formPassword"
                type="password"
                required="true"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <input
                placeholder="email"
                className="formEmail"
                type="email"
                required="true"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
                placeholder="firstname"
                className="formFirstname"
                type="text"
                required="true"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleChange}
              />
              <input
                placeholder="lastname"
                className="formLastname"
                type="text"
                required="true"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleChange}
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Accountsignup;
