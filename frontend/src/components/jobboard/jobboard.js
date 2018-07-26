import React, { Component } from 'react';
import axios from 'axios';
// Need to do `yarn add react-trello` to use the package.
import Board from 'react-trello';

// This NewCard will be replaced with AddJob
import NewCard from 'react-trello';
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
  constructor(props) {
    super(props);
    this.state = {
      lists: {
        wishlist: [],
        applied: [],
        phone: [],
        "on site": [],
        offer: [],
        rejected: []
      }
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/user')
      .then(user => {
        let applications = user.data.applications;
        let lists = this.state.lists;

        applications.forEach(application => {
          let category = application.category;
<<<<<<< HEAD
          lists[`${category}`].push(application);
=======
          if (!lists[category]) {
            lists[category] = [];
          }
          lists[category].push(application);
>>>>>>> 860edfce11da4704d86c65c42e1a60e57e627ed0
        });

        this.setState({ lists: lists });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Board
        data={data}
        cardDragClass="draggingCard"
        laneDragClass="draggingLane"
        draggable
        editable
        newCardTemplate={<NewCard />}
      />
    );
  }
}

export default JobBoard;
