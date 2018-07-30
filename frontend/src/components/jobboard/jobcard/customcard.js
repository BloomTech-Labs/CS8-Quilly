import React, { Fragment } from 'react';
import DeleteButton from './deleteButton';
import EditButton from './editButton';

const CustomCard = props => {
  return (
    <div>
      <header
        style={{ borderBottom: '1px solid #eee', padding: 6, marginBottom: 10,
    		 display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
			color: props.cardColor
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 'bold' }}>{props.name}</div>
        <div style={{ fontSize: 11 }}>{props.dueOn}</div>
        <div className="optionsContainer">
        <EditButton />
        <DeleteButton />
        </div>
      </header>
      <div style={{ fontSize: 12, color: '#BD3B36' }}>
        <div style={{ color: '#4C4C4C', fontWeight: 'bold' }}>{props.subTitle}</div>
        <div style={{ padding: '5px 0px' }}><i>{props.body}</i></div>
        <div style={{ marginTop: 10, textAlign: 'center', color: props.cardColor, fontSize: 15, fontWeight: 'bold' }}>
          {props.escalationText}
        </div>
      </div>
    </div>
  )
}

export default CustomCard;
