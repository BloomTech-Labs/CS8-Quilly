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

        const formData = new FormData(myForm);
        //const resume = myForm.file.files[0];
        //const resumeBlob = new Blob([resume], {type: "application/pdf"});
        //formData.append("resume", resume);
        //console.log(formData.getAll("resume"));
        axios.post(`${config.serverUrl}/user/addResume`, formData)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error.response);
        });
    };

    componentDidMount() {
        axios.get(`${config.serverUrl}/user/getResumes`)
        .then(resumes => {
            this.setState({resumes});
        })
        .catch(error => {
            console.log(error.response);
        });
    };


    render() {
        console.log(this.state.resumes.data);
        return (
            <div>
                <form id="myForm">
                    <input type="file" /*ref={(input) => {this.filesInput = input}}*/ name="file" />
                    <input type="text" placeholder="Resume Name" name="resumeName"/>
                    <button type="submit" onClick={this.handleSubmit}>Add Resume</button>
                </form>
            </div>
        )
    }
}

export default Resumespage;
