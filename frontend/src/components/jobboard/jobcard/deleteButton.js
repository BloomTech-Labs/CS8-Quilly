import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './deleteButton.css'

const DeleteButton = () => {
  return (
    <Fragment>
      <FontAwesomeIcon icon={faTrash} />
    </Fragment>
  );
};

export default DeleteButton;
