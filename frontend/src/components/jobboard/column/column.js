import React, { Component } from 'react';

import Card from '../jobcard/jobcard';

class Column extends Component {
  addCard() {
    this.props.addCard(this.props.id, { title: Date.now(), id: Date.now() })
  }

  render() {
    const style = {
      minWidth: '20%',
      marginLeft: '20px'
    }

    const { title } = this.props

    let cards = this.props.cards.map((card) =>
      <Card key={card.id} title={card.title} id={card.id} />
    )

    return (
      <div style={style}>
        <div className="panel-heading">
          <h2>{title}</h2>

          <button onClick={this.addCard.bind(this)}>
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add card
          </button>
        </div>

        <div className="panel-body">
          {cards}
        </div>
      </div>
    );
  }
}

export default Column;