import React, { Component } from "react";
import "./accountlogin.css";
import Modal from "react-modal";

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

class Accountlogin extends Component {
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

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="Accountlogin">
        <a href="/">Sign Up</a>
        <a onClick={this.openModal}>Sign In</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
          className="hello"
        >
          <div className="signupmodal">
            <h2>signup</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input 
                required= "true"
                placeholder="username"
                 />
                username
              </label>
              <label>
                <input placeholder="password" />
                password
              </label>
              <label>
                <input placeholder="email" />
                email
              </label>
              <label>
                <input placeholder="firstname" />
                firstname
              </label>
              <label>
                <input placeholder="lastname" />
                lastname
              </label>
              <button onChange={this.handleChange}> </button>
            </form>
          </div>

          {/* <div className="signinmodal">
            <h2>signin</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input placeholder="email" />
                email
              </label>
              <label>
                <input placeholder="password" />
                password
              </label>
              <button onChange={this.handleChange}> </button>
            </form>
          </div> */}
        </Modal>
      </div>
    );
  }
}

export default Accountlogin;
