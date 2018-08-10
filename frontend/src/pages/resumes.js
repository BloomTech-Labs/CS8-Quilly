import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Signout from '../components/signout/signout';
import ResumeView from '../components/resumeView/resumeView'

const Resumespage = (props) => {
    return (
      <div className="App">
        <Signout {...props} />
        <Sidebar />
        < ResumeView />
      </div>
    );
}

export default Resumespage;
