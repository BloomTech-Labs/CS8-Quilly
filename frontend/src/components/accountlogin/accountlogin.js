import React, { Component } from "react";
import "./accountlogin.css";
import Modal from "react-modal";
import axios from "axios";
let fakeServerData = {
  users: [
    {
      username: "aa",
      password: "123"
    },
    {
      username: "bb",
      password: "123"
    }
  ]
};

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
    this.setState({ serverData: fakeServerData });
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
      <div className="Accountlogin">
        <button className="openLogin" onClick={this.openModal}>
          sign in
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
                  className="formUsername"
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
                  className="formPassword"
                  type="password"
                  required="true"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Accountlogin;
