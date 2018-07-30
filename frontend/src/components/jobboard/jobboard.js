import React, { Component } from 'react';
import axios from 'axios';
import CustomCard from './jobcard/customCard';
import formatDate from './formatDate.js';

// need to do `yarn add react-trello` to use the package.
import Board from 'react-trello';

// this NewCard will be replaced with AddJob
import Jobcreatemodal from '../jobcreatemodal/jobcreatemodal';
import config from '../../config/config';
import './jobboard.css';

class JobBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        lanes: [
          {
            id: 'lane1',
            title: 'title',
            label: 'test'
          }
        ]
      },
    };
  }

  generateData = (jobsData) => {
    const data = {};
    data.lanes = [];
    let cardIndex = 0;
    const listCards = {};

    // grab the names of the categories
    const listCategories = Object.keys(jobsData);

    // format list titles by capitalizing each first word
    const listTitles = listCategories
                      .map(title => title.split(' ')
                      .map(word => word[0].toUpperCase() + word.slice(1))
                      .join(' '));

    // get job count of each list
    const listLabels = listCategories.map(list => jobsData[list].length.toString());

    // make job cards
    Object.entries(jobsData).forEach(([ listName, listData ]) => {
      listCards[listName] = [];

      // make sure there are some cards in the list before we start
      if (listData.length > 0) {
        listData.forEach((job) => {
          cardIndex += 1;

          listCards[listName].push({
            id: `Card${cardIndex}`,
            title: job.company,
            description: job.position,
            label: formatDate(job.createdAt)
          });
        });
      }
    });

    // create lanes (aka columns)
    for (let i = 0; i < listCategories.length; i++) {
      data.lanes.push({
        id: `lane${i + 1}`,
        title: listTitles[i],
        label: listLabels[i],
        cards: listCards[listCategories[i]]
      });
    }

    return data;
  }

  componentDidMount() {
    const lists = {
      wishlist: [],
      applied: [],
      phone: [],
      "on site": [],
      offer: [],
      rejected: [],
    }

    axios
      .get(`${config.serverUrl}/user`)
      .then(user => {
        let applications = user.data.applications;
        applications.forEach(application => {
          let category = application.category;
          if (!lists[category]) {
            lists[category] = [];
          }
          lists[category].push(application);
        });

        // format data for board
        let data = this.generateData(lists);

        this.setState({
          lists: lists,
          data: data
        });

        // send data up to jobs component
        this.props.handleJobChange(lists);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Board
        data={this.state.data}
        customCardLayout
        cardDragClass="draggingCard"
        draggable
        laneDraggable={false}
        newCardTemplate={<Jobcreatemodal />}
        >
        <CustomCard cards={this.state.data.cards} />
      </Board>
    );
  }
}

export default JobBoard;
