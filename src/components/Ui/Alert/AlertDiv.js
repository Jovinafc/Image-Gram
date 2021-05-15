import React, { useEffect } from 'react';
import './AlertDiv.css';
import Alert from '@material-ui/lab/Alert';
import { actionTypes } from '../../../reducer';
import { useStateValue } from '../../../StateProvider';

const AlertDiv = (props) => {
  const [{ message, alertType, show }, dispatch] = useStateValue();

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      dispatch({
        type: actionTypes.ALERT_REMOVE,
      });
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, [show, dispatch]);

  // useEffect(() => {
  //   console.log("Use Effect Called");
  // }, []);

  if (!show) {
    return null;
  }

  return (
    <div className='alert bottom-right'>
      <div className='alert__message'>
        <Alert variant='filled' severity={alertType}>
          {message}
        </Alert>
      </div>
    </div>
  );
};

export default AlertDiv;
