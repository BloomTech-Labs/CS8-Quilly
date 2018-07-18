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
          overlayClassName="Overlay1"
          className="hello"
        >
          <div className="Jobtimeline1">
            <h2>Job Timeline</h2>
            <div className="Checkboxes1">
              <form className="form">
                <input name="isGoing" type="checkbox" />
                <label>Submitted Job Application</label>
                <input name="isGoing" type="checkbox" />
                <label>On-Site Interview</label>
                <br />
                <input name="isGoing" type="checkbox" />
                <label>Received Response</label>
                <input name="isGoing" type="checkbox" />
                <label>Whiteboarding</label>
                <br />
                <input name="isGoing" type="checkbox" />
                <label>Phone Interview</label>
                <input name="isGoing" type="checkbox" />
                <label>Code Test</label>
                <br />
                <input />
              </form>
            </div>
          </div>

          <div className="Jobtimeline2">
            <h2>Job Information</h2>
            <input />
            <input />
            <br />
            <input />
            <input />
            <br />
            <input />
            <input />
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
