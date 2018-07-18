import React, { Component } from 'react';
import './settings.css';

class Settings extends Component {
  render() {
    return (
      <div className="Settings">
        <form>
          <label>E-Mail:</label>
          <input type="text" name="E-Mail" />
          <br />
          <label>Old Password:</label>
          <input type="text" name="oldpassword" />
          <br />
          <label>New Password:</label>
          <input type="text" name="newpassword" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Settings;
