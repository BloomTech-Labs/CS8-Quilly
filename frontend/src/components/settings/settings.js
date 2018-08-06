import React, { Component } from 'react';
import './settings.css';

class Settings extends Component {
  render() {
    return (
      <div className="Settings">
        <form>
          <label>E-Mail:</label>
          <input type="text" name="E-Mail" className="settingsInput" />
          <br />
          <label>Old Password:</label>
          <input type="text" name="oldpassword" className="settingsInput" />
          <br />
          <label>New Password:</label>
          <input type="text" name="newpassword" className="settingsInput" />
          <br />
          <input type="submit" value="Submit" className="settingsInput" />
        </form>
      </div>
    );
  }
}

export default Settings;
