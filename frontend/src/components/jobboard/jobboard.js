import React, { Component } from 'react';
import CustomCard from './jobcard/customCard.js';
import formatDate from './formatDate.js';
import axios from 'axios';
import config from '../../config/config';

// need to do `yarn add react-trello` to use the package.
import Board from 'react-trello';

import Jobcreatemodal from '../jobcreatemodal/jobcreatemodal';
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
      lists: this.props.jobs,
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
    Object.entries(jobsData).forEach(([listName, listData]) => {
      listCards[listName] = [];

      // make sure there are some cards in the list before we start
      if (listData.length > 0) {
        listData.forEach((job) => {
          cardIndex += 1;
          listCards[listName].push({
            id: `Card${cardIndex}`,
            title: job.company,
            description: job.position,
            label: formatDate(job.createdAt),
            jobInfo: job
          });
        });
      }
    });

    // create lanes (aka columns)
    for (let i = 0; i < listCategories.length; i++) {
      data.lanes.push({
        id: listCategories[i],
        title: listTitles[i],
        label: listLabels[i],
        cards: listCards[listCategories[i]]
      });
    }

    return data;
  };

  componentDidMount() {
    const data = this.generateData(this.props.jobs);
    this.setState({ data: data });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.lists !== this.state.lists) {
      console.log('in if');
      this.setState({ lists: this.state.lists });
      const data = this.generateData(this.props.jobs);
      this.setState({ data: data });
    }
  }

  forceUpdate = () => {
    console.log('forced update');
    const data = this.generateData(this.props.jobs);
      this.setState({ data: data });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.jobs !== prevState.lists) {
      console.log('in if in der')
      return { lists: nextProps.jobs };
    }
    else return null;
  }

  handleListUpdates = (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {

    const lists = this.state.lists;

    if (targetLaneId !== sourceLaneId) {
      const applicationId = cardDetails.jobInfo._id;
      const job = Object.assign({}, ...cardDetails.jobInfo, { category: `${targetLaneId}` });

      axios
        .put(`${config.serverUrl}/user/applications/update/${applicationId}`, job)
        .then((response) => {
          console.log(response);
          let oldList = `${sourceLaneId}`;
          let newList = `${targetLaneId}`;

          lists[oldList] = lists[oldList].filter(app => app !== job);
          lists[newList].push(job);
          this.handleJobChange(lists);
        })
        .catch(error => error.console(error));
    }
  }

  render() {
    return (
      <Board
        data={this.state.data}
        customCardLayout
        cardDragClass="draggingCard"
        draggable
        laneDraggable={false}
        handleDragEnd={this.handleListUpdates}
        newCardTemplate={<Jobcreatemodal />}
        >
        <CustomCard cards={this.state.data.cards} openEditModal={this.props.openEditModal} openDeleteModal={this.props.openDeleteModal} />
      </Board>
    );
  }
}

export default JobBoard;
