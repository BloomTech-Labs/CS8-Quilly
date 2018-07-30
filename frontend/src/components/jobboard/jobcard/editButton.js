import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './editButton.css';

const EditButton = () => {
  return (
    <Fragment>
      <FontAwesomeIcon icon={faCog} />
    </Fragment>
  );
};

export default EditButton;
