import React, { Component } from 'react';
import './introduction.css';

import imgKia from '../../img/Self-Kia.jpg';
import imgKenny from '../../img/Self-Kenny.jpg';
import imgJosh from '../../img/Self-Josh.jpg';
import imgRobert from '../../img/Self-Robert.jpg';

class Introductions extends Component {
    render() {
        return (
            <div className="groupMembers">
                <div className="Kia">
                <h3>Kia Choi</h3>
                <img src={imgKia} />
                </div>
                <h3>Kenny Pham</h3>
                <div className="Kenny">
                <img src={imgKenny} />
                </div>
                <h3>Josh Coyne</h3>
                <div className="Josh">
                <img src={imgJosh} />
                </div>
                <h3>Robert Rak</h3>
                <div className="Robert">
                <img src={imgRobert} />
                </div>
            </div>
        );
    }
}

export default Introductions;