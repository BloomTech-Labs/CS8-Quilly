import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import config from '../../config/config';
import './accountsignup.css';

let fakeServerData = {
  users: [
    {
      username: 'aa',
      password: '123',
      email: 'aa@aa.com',
      firstname: 'aa',
      lastname: 'aa'
    },
    {
      username: 'bb',
      password: '123',
      email: 'bb@bb.com',
      firstname: 'bb',
      lastname: 'bb'
    }
  ]
};

class Accountsignup extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      username: '',
      password: '',
      email: '',
      firstname: '',
      lastname: ''
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
      .post(`${config.serverUrl}/user/register`, {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        firstname: this.state.firstname,
        lastname: this.state.lastname
      })
      .then(response => {
        console.log(response);
        // Now that the user is created. Login the user
        axios
          .post(`${config.serverUrl}/user/login`, {
            username: this.state.username,
            password: this.state.password
          })
          .then(function(response) {
            console.log(response);
            window.location.pathname = '/jobs';
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(`HANDLE SUBMIT ERROR: ${error}!`);
      });

    event.preventDefault();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
    setTimeout(() => this.setFocus(), 100);
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  setFocus() {
    document.getElementById('startFocus').focus();
  }

  render() {
    return (
      <div className="Accountsignup">
        <button className="openModal" onClick={this.openModal}>
          Register
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
          className="hello"
        >
          <div className="signupmodal">
            <h2 className="signupHeader">Register</h2>
            <form onSubmit={this.handleSubmit} className="inputform">
              <h3 className="inputlable">Username:</h3>
              <input
                placeholder="username"
                className="inputField"
                type="text"
                required="true"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                id="startFocus"
              />
              <h3 className="inputlable"> Password:</h3>
              <input
                placeholder="password"
                className="inputField"
                type="password"
                required="true"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <h3 className="inputlable">E-mail:</h3>
              <input
                placeholder="email"
                className="inputField"
                type="email"
                required="true"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <h3 className="inputlable"> First Name:</h3>
              <input
                placeholder="firstname"
                className="inputField"
                type="text"
                required="true"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleChange}
              />
              <h3 className="inputlable"> Last Name:</h3>
              <input
                placeholder="lastname"
                className="inputField"
                type="text"
                required="true"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleChange}
              />
              <input type="submit" value="Create New Account" className="btn" />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Accountsignup;
