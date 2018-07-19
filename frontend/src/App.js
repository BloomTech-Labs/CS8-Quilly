/*import React, { Component } from 'react';

import './App.css';
import Coverflow from './components/coverflow/coverflow';
import Accountlogin from './components/accountlogin/accountlogin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Accountlogin />
        </div>
        <div className="Coverflow">
          <Coverflow />
        </div>
        <p className="description">
          We have a huge selection of products to help you on your job hunt!
        </p>
        <p>Please view our product selection above to learn more.</p>

        <div>
          <button className="button">Buy Now</button>
        </div>
      </div>
    );
  }
}

export default App;*/

// Testing on Job Board - Display
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JobBoard from './components/jobboard/jobboard';
import Sidebar from './components/sidebar/sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <JobBoard />
      </div>
    );
  }
}

export default App;
