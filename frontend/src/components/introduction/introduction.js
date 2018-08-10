import React, { Component } from 'react';
import './introduction.css';

import imgKia from '../../img/Self-Kia.jpg';
import imgKenny from '../../img/Self-Kenny.jpg';
import imgJosh from '../../img/Self-Josh.jpg';
import imgRobert from '../../img/Self-Robert.jpg';

class Introductions extends Component {
    render() {
        return (
            <div>
                <div class="groupMembers">
                    <img src={imgKia} />
                    <img src={imgKenny} />
                    <img src={imgJosh} />
                    <img src={imgRobert} />
                </div>
            </div>
        );
    }
}

export default Introductions;