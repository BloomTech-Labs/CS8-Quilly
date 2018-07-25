import React, { Component } from "react";
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import axios from "axios";
import "./accountlogin.css";

class Accountlogin extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      username: "",
      password: ""
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    // this.setState({ serverData: fakeServerData });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

    console.log(`THIS IS THE STATE: ${this.state.username}`);
  }

  handleSubmit(event) {
    axios
      .post(`http://localhost:5000/user/login`, {
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
         <p>sign in</p>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
          className="hello"
        >
          <div className="signinmodal">
            <h2>signin</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  placeholder="username"
                  className="formInput"
                  id="startFocus"
                  type="username"
                  required="true"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <input
                  placeholder="password"
                  className="formInput"
                  type="password"
                  required="true"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" className="btn"/>
            </form>
          </div>
        </Modal>
        <Link to="/">Sign Up</Link>
        <Link to="/jobs">Sign In</Link>
      </div>
    );
  }
}

export default Accountlogin;
