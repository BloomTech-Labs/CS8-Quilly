import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog} from '@fortawesome/free-solid-svg-icons';
import './buttonStyle.css';

const EditButton = () => {
  return (
    <Fragment>
      <FontAwesomeIcon icon={faCog} className="cardButton editButton" />
    </Fragment>
  );
};

export default EditButton;
