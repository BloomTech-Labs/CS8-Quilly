import React, { Component } from 'react';
import Modal from 'react-modal';
import './jobcreatemodal.css';
import axios from 'axios';

Modal.setAppElement(document.getElementById('root'));

class Jobcreatemodal extends Component {
  constructor(props) {
    super(props);
  
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
      pointOfContact: ""
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

  addToLists(newApplication) {
    let lists = this.props.jobs;

    // This will have to be reworked to handle user entered lists
    if (newApplication.category === 'wishlist')
      lists["wishlist"].push(newApplication);
    else if (newApplication.category === 'onSiteInterview')
      lists["on site"].push(newApplication);
    else if (newApplication.category === 'phoneInterview')
      lists["phone"].push(newApplication);
    else if (newApplication.category === 'submitted')
      lists["applied"].push(newApplication);

    return lists;

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
      notes,
      jobSource,
      linkToJobPost,
      pointOfContact
    } = this.state;
    const onsiteInterview = this.state.onSiteInterview;
    
    // set status based on checkboxes
    let category = this.state.category;
    if (onSiteInterview)
      category = 'onSiteInterview';
    else if (phoneInterview)
      category = 'phoneInterview';
    else if (submitted)
      category = 'submitted';
    
    const temp = {
      company,
      position,
      submitted,
      onsiteInterview,
      recievedResponse,
      whiteboard,
      phoneInterview,
      codeTest,
      open,
      category,
      notes,
      jobSource,
      linkToJobPost,
      pointOfContact,
    }
    console.log(temp);
    axios
    .post('http://localhost:5000/user/applications/add', temp)
    .then(response => {
      console.log('Response:', response);
      const newLists = this.addToLists(response.data.slice(-1)[0]);
      this.props.handleJobChange(newLists);
    })
    .catch(error => {
      console.log(error);
    });
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
             <br/>
            <input 
            placeholder="Position"
            name="position"
            value={this.state.position}
            onChange={this.handleChange} />
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
