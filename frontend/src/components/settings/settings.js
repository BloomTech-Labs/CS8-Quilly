import React, { Component } from 'react';
import './settings.css';

class Settings extends Component {
  render() {
    return (
      <div className="Settings">
        <form class="settingsForm">
          <label>E-Mail:</label>
          <input type="email" name="E-Mail" className="settingsInput" />
          <br />
          <label>Old Password:</label>
          <input type="password" name="oldpassword" className="settingsInput" />
          <br />
          <label>New Password:</label>
          <input type="password" name="newpassword" className="settingsInput" />
          <br />
          <input type="submit" value="Submit" className="settingsBtn" />
        </form>
      </div>
    );
  }
}

export default Settings;
