import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Settings from '../components/settings/settings';
import Signout from '../components/signout/signout';

const Settingspage = (props) => {
    return (
      <div className="App">
        <Signout {...props} />
        <Sidebar />
        <Settings />
      </div>
    );
}

export default Settingspage;
