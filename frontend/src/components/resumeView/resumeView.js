import React, { Component } from 'react';
import config from '../../config/config';
import axios from 'axios';
import './resumeView.css';

class ResumeView extends Component {
    constructor(){
        super();

        this.state = {
            resumes: [],
        }
    }

    deleteResume = (id) => {
        let temp = this.state.resumes;
        temp = temp.filter(resume => resume._id !== id);
        this.setState({ resumes: temp });

        axios.put(`${config.serverUrl}/user/update`, { resumes: temp })
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error.response);
        })
    }
    updateView = () => {
        axios.get(`${config.serverUrl}/user/getResumes`)
        .then(resumes => {
            this.setState({ resumes: resumes.data });
            console.log(this.state.resumes);
            
        })
        .catch(error => {
            console.log('error',error.response);
        });

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const myForm = document.getElementById('myForm');

        const formData = new FormData(myForm);

        axios.post(`${config.serverUrl}/user/addResume`, formData)
        .then(response => {
            console.log(response);
            this.updateView();
        })
        .catch(error => {
            console.log(error.response);
        });
        
    };

    componentDidMount() {
        this.updateView();
    };


    render() {
        return (
            <div className="resumeBox">
                <form className="resumeForm" id="myForm">
                    <input type="file" name="file" />
                    <input type="text" placeholder="Resume Name" name="resumeName"/>
                    <button type="submit" onClick={this.handleSubmit}>Add Resume</button>
                </form>
                <div className="resumes">
                    {this.state.resumes.map(resume => {
                        return(
                            <div key={resume._id} className="resumeCard">
                                <div className="resumeName">{resume.name}</div>
                                <a href={resume.file_url} dangerouslySetInnerHTML={{__html:resume.thumb_url}}></a>
                                <button onClick={() => this.deleteResume(resume._id)}>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ResumeView;