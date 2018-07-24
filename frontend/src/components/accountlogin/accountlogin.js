import React, { Component } from "react";
import "./accountlogin.css";
// import Modal from "react-modal";
// import axios from "axios";
// let fakeServerData = {
//   users: [
//     {
//       username: "aa",
//       password: "123"
//     },
//     {
//       username: "bb",
//       password: "123"
//     }
//   ]
// };

class Accountlogin extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
      // username: "",
      // password: ""
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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
        <a href="/">Sign In</a>
        {/* <a onClick={this.openModal}>Sign In</a>
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
                  placeholder="email"
                  className="formEmail"
                  type="email"
                  required="true"
                  name="email"
                  value={this.state.email}
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
        </Modal> */}
      </div>
    );
  }
}

export default Accountlogin;
