import React, { Fragment } from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className='modal'
        style={{
          transform: props.show ? 'translateY(0)' : 'translate(-300vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default Modal;
