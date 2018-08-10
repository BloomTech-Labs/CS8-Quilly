import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Signout from '../components/signout/signout';
import config from '../config/config';
import axios from 'axios';
import { fstat } from 'fs';
import fs from 'fs';
import { Document, Page } from 'react-pdf';

class Resumespage extends Component {
    constructor(){
        super();

        this.state = {
            resumes: [],
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const myForm = document.getElementById('myForm');

        const formData = new FormData(myForm);

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
            this.setState({ resumes: resumes.data });
            console.log(this.state.resumes);
            
        })
        .catch(error => {
            console.log('error',error.response);
        });
    };


    render() {
        return (
            <div>
                <form id="myForm">
                    <input type="file" /*ref={(input) => {this.filesInput = input}}*/ name="file" />
                    <input type="text" placeholder="Resume Name" name="resumeName"/>
                    <button type="submit" onClick={this.handleSubmit}>Add Resume</button>
                </form>
                <div>
                    {this.state.resumes.map(resume => {
                        return(
                            <div>
                                <div>{resume.name}</div>
                                <a href={resume.file_url} dangerouslySetInnerHTML={{__html:resume.thumb_url}}></a>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Resumespage;
