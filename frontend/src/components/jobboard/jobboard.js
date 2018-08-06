import React, { Component } from 'react';
import CustomCard from './jobcard/customCard.js';
import formatDate from './formatDate.js';

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
        id: `lane${i + 1}`,
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
        <CustomCard cards={this.state.data.cards} openEditModal={this.props.openEditModal} openDeleteModal={this.props.openDeleteModal} />
      </Board>
    );
  }
}

export default JobBoard;
