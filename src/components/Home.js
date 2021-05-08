import React from 'react';
import ImageUpload from './ImageUpload';
import ImageList from './ImageList';
import Users from './Users.js';
import MyImages from './MyImages';
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import Layout from './Layout/Layout';

const Home = () => {
  const [state, dispatch] = useStateValue();

  const signOutUser = () => {
    console.log('Inside Log');
    // auth.signOut();
    dispatch({
      type: actionTypes.LOGOUT,
    });
  };

  return (
    <>
      <Layout />
    </>
  );
};

export default Home;
