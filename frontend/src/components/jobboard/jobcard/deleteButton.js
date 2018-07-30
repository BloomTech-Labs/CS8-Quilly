import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './buttonStyle.css';

const DeleteButton = () => {
  return (
    <Fragment>
      <FontAwesomeIcon icon={faTrash} className="cardButton deleteButton" />
    </Fragment>
  );
};

export default DeleteButton;
