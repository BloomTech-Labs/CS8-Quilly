import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Contribution from '../components/contribution/contribution';
import Signout from '../components/signout/signout';

const Contributionspage = (props) => {
  return (
    <div className="App">
      <Signout {...props} />
      <Sidebar />
      <h1>Contributions</h1>
      <Contribution />
    </div>
  );
};

export default Contributionspage;
