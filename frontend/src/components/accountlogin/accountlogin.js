import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import config from '../../config/config';
import './accountlogin.css';

class Accountlogin extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      username: '',
      password: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

    console.log(`THIS IS THE STATE: ${this.state.username}`);
  }

  handleSubmit(event) {
    // console.log({username:this.state.username, password:this.state.password});
    axios
      .post(`${config.serverUrl}/user/login`, {
        username: this.state.username,
        password: this.state.password
      })
<<<<<<< Updated upstream
      .then(function(response) {
        window.location.pathname = '/jobs';
=======
      .then(function (response) {
        this.props.history.push('/jobs');
>>>>>>> Stashed changes
      })
      .catch(function(error) {
        console.error(error);
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
      <div className="Accountlogin">
        <button className="openLogin" onClick={this.openModal}>
          <p>Login</p>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
          className="hello"
        >
          <div className="signinmodal">
            <h2 className="signinheader">Sign In</h2>
            <form onSubmit={this.handleSubmit} className="inputform">
              <h3 className="inputlable">Username:</h3>
              <input
                placeholder="username"
                className="inputField"
                id="startFocus"
                type="username"
                required="true"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />

              <h3 className="inputlable">Password:</h3>
              <input
                placeholder="password"
                className="inputField"
                type="password"
                required="true"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />

              <input type="submit" value="Submit" className="btn" />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Accountlogin;
