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
*/

import React, { Component } from 'react';

import Column from './column/column'

class Board extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: [
        {
          title: 'Foo',
          id: 'foo',
          cards: [
            {
              id: 1,
              title: 'Foo'
            },
            {
              id: 2,
              title: 'Bar'
            },
            {
              id: 3,
              title: 'Wibble'
            }
          ]
        },
        {
          title: 'React',
          id: 'react',
          cards: [
            {
              id: 4,
              title: 'React'
            },
            {
              id: 5,
              title: 'Is'
            },
            {
              id: 6,
              title: 'Fun'
            },
            {
              id: 7,
              title: 'So far... :-)'
            }
          ]
        }
      ]
    }
  }

  addCard(columnId, card) {
    var columns = this.state.columns.slice()

    var thisColumn = columns.find(column => column.id === columnId)
    thisColumn.cards.push(card)

    this.setState({columns: columns})
  }


  render() {
    const style = {
      display: 'flex'
    }

    var columns = this.state.columns.map((column) =>
      <Column key={column.id} title={column.title} id={column.id} cards={column.cards} addCard={this.addCard.bind(this)} />
    )

    return (
      <div className="board row" style={style}>
        {columns}
      </div>
    );
  }
}

export default Board;