import React, { Component } from 'react';
import Modal from 'react-modal';
import './jobcreatemodal.css';
import axios from 'axios';

Modal.setAppElement(document.getElementById('root'));

class Jobcreatemodal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      company: "",
      position: "",
      submitted: false,
      onsiteInterview: false,
      recievedResponse: false,
      whiteboard: false,
      phoneInterview: false,
      codeTest: false,
      open: true,
      category: 'wishlist',
      notes: "",
      jobSource: "",
      linkToJobPost: "",
      pointOfContact: "",
      status: "whishlist"
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

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const {
      company,
      position,
      submitted,
      onSiteInterview,
      recievedResponse,
      whiteboard,
      phoneInterview,
      codeTest,
      open,
      category,
      notes,
      jobSource,
      linkToJobPost,
      pointOfContact
    } = this.state;
    const onsiteInterview = this.state.onSiteInterview;
    // console.log(company);
    console.log(onsiteInterview);
    // let status = this.state.status;
    // if (onSiteInterview)
    //   status = 'onSiteInterview';
    // else if (phoneInterview)
    //   status = 'phoneInterview';
    // else if (submitted)
    //   status = 'submitted';
    
    // const temp = {
    //   company,
    //   position,
    //   submitted,
    //   onsiteInterview,
    //   recievedResponse,
    //   whiteboard,
    //   phoneInterview,
    //   codeTest,
    //   open,
    //   category,
    //   notes,
    //   jobSource,
    //   linkToJobPost,
    //   pointOfContact,
    //   status
    // }
    // console.log(temp);
    // axios.post('http://localhost:5000/user/applications/add',{
      
    // } )
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
                  <input 
                  type="checkbox"
                  name="submitted"
                  checked={this.state.submitted}
                  onChange={this.handleChange} />
                  Submitted Job Application
                </label>
                <label>
                  <input 
                  type="checkbox"
                  name="onSiteInterview"
                  checked={this.state.onSiteInterview}
                  onChange={this.handleChange} />
                  On-Site Interview
                </label>
                <br />
                <label>
                  <input 
                  type="checkbox"
                  name="recievedResponse"
                  checked={this.state.recievedResponse}
                  onChange={this.handleChange} />
                  Received Response
                </label>
                <label>
                  <input 
                  type="checkbox"
                  name="whiteboard"
                  checked={this.state.whiteboard}
                  onChange={this.handleChange} />
                  Whiteboarding
                </label>
                <br />
                <label>
                  <input 
                  type="checkbox"
                  name="phoneInterview"
                  checked={this.state.phoneInterview}
                  onChange={this.handleChange} />
                  Phone Interview
                </label>
                <label>
                  <input 
                  type="checkbox"
                  name="codeTest"
                  checked={this.state.codeTest}
                  onChange={this.handleChange} />
                  Code Test
                </label>
                <br />
                <input 
                placeholder="Notes"
                name="notes"
                value={this.state.notes}
                onChange={this.handleChange} />
              </form>
            </div>
          </div>

          <div className="Jobinformation">
            <h2>Job Information</h2>
            <input 
            placeholder="Company" 
            name="company"
            value={this.state.company}
            onChange={this.handleChange}/>
            <input 
            placeholder="Souce of Job"
            name="jobSource"
                  value={this.state.jobSource}
                  onChange={this.handleChange} />
            <br />
            <input 
            placeholder="Link to Job Posting"
            name="linkToJobPost"
            value={this.state.link}
            onChange={this.handleChange} />
            <input 
            placeholder="Resolution(Open/Closed)"
            name="resolution"
            value={this.state.resolution}
            onChange={this.handleChange} />
            <br />
            <input 
            placeholder="Point of Contact"
            name="pointOfContact"
            value={this.state.pointOfContact}
            onChange={this.handleChange} />
            <input 
            placeholder="Upload resume/CV"
             />
            <button onClick={this.handleSubmit}>
              Add Job
            </button>
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
