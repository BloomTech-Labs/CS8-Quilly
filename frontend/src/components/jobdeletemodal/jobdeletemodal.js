import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import config from '../../config/config';

import './jobdeletemodal.css';


Modal.setAppElement(document.getElementById('root'));

class Jobdeletemodal extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalIsopen: false
        }
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }
    
    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
                overlayClassName="Overlay"
                className="jobeditmodal"
                >
                <h1>Are you sure you want to delete this application?</h1>
                <button onClick={this.handleSubmit}>Yes</button>
                <button onClick={this.closeModal}>No</button>
                </Modal >
            </div>
        )
        
    }


}
export default Jobdeletemodal;
