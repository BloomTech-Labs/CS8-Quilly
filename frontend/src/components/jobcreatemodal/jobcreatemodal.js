import React, { Component } from 'react';
import Modal from 'react-modal';
import './jobcreatemodal.css';

Modal.setAppElement(document.getElementById('root'));

class Jobcreatemodal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button className="openModal" onClick={this.openModal}>
          Add Job &#10010;
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
          className="hello"
        >
          <div className="Jobtimeline">
            <h2>Job Timeline</h2>

            <div className="Checkboxes">
              <form className="form">
                <label>
                  <input type="checkbox" />
                  Submitted Job Application
                </label>
                <label>
                  <input type="checkbox" />
                  On-Site Interview
                </label>
                <br />
                <label>
                  <input type="checkbox" />
                  Received Response
                </label>
                <label>
                  <input type="checkbox" />
                  Whiteboarding
                </label>
                <br />
                <label>
                  <input type="checkbox" />
                  Phone Interview
                </label>
                <label>
                  <input type="checkbox" />
                  Code Test
                </label>
                <br />
                <input placeholder="Notes" />
              </form>
            </div>
          </div>

          <div className="Jobinformation">
            <h2>Job Information</h2>
            <input placeholder="Company" />
            <input placeholder="Souce of Job" />
            <br />
            <input placeholder="Link to Job Posting" />
            <input placeholder="Resolution(Open/Closed" />
            <br />
            <input placeholder="Point of Contact" />
            <input placeholder="Upload resume/CV" />
          </div>
          <button className="openModal" onClick={this.openModal}>
            Add Job &#10010;
          </button>
        </Modal>
      </div>
    );
  }
}

export default Jobcreatemodal;
