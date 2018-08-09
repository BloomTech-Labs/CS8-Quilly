import React, { Component } from 'react';
import './introduction.css';
import imgKia from '../../img/Self-Kia.jpg';

class Introductions extends Component {
    render() {
        return (
            <div>
                <div class="groupMembers">
                    <imgKia />
                </div>
            </div>
        );
    }
}

export default Introductions;