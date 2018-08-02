import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Meetup from '../components/meetup/meetup';
import Signout from '../components/signout/signout'

const Meetupspage = (props) => {
    return (
      <div className="App">
        <Signout {...this.props} />
        <Sidebar />
        <Meetup />
      </div>
    );
}

export default Meetupspage;
