import React, { Component } from 'react';

// Need to do `yarn add react-trello` to use the package.
import Board from 'react-trello';

// This NewCard will be replaced with AddJob
import Jobcreatemodal from '../jobcreatemodal/jobcreatemodal';
import './jobboard.css';

// Temporary Data
const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        {
          id: 'Card1',
          title: 'Write Blog',
          description: 'Can AI make memes',
          label: '30 mins'
        },
        {
          id: 'Card2',
          title: 'Pay Rent',
          description: 'Transfer via NEFT',
          label: '5 mins',
          metadata: { sha: 'be312a1' }
        }
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: []
    }
  ]
};

class JobBoard extends Component {
  render() {
    console.log(this.props.jobs)
    return (
      <Board
        data={data}
        cardDragClass="draggingCard"
        laneDragClass="draggingLane"
        draggable
        editable
        newCardTemplate={<Jobcreatemodal />}
      />
    );
  }
}

export default JobBoard;