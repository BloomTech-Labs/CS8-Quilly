import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Contribution from '../components/contribution/contribution';
import Signout from '../components/signout/signout';

const Contributionspage = (props) => {
    return (
      <div className="App">
        <Signout {...props} />
        <Sidebar />
        <Contribution />
      </div>
    );
}

export default Contributionspage;
