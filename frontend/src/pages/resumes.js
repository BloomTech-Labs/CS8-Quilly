import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Signout from '../components/signout/signout';
import config from '../config/config';
import axios from 'axios';

class Resumespage extends Component {
    constructor(){
        super();

        this.state = {
            resumes: [],
            resume: ""
        }
        let filesInput;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const myForm = document.getElementById('myForm');
        console.log(myForm.file);

        const formData = new FormData();
        const resume = myForm.file.files[0];
        const resumeBlob = new Blob([resume], {type: "application/pdf"});
        formData.append("resume", resumeBlob, resume.name);
        console.log(formData.getAll("resume"));
        axios.post(`${config.serverUrl}/user/addResume`, formData)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error.response);
        });
    };


    render() {
        return (
            <div>
                <form id="myForm">
                    <input type="file" /*ref={(input) => {this.filesInput = input}}*/ name="file" />
                    <button type="submit" onClick={this.handleSubmit}>Add Resume</button>
                </form>
            </div>
        )
    }
}

export default Resumespage;
