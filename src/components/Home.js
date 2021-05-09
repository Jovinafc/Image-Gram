import React from 'react';
// import ImageUpload from './ImageUpload';
// import ImageList from './ImageList';
// import Users from './Users.js';
// import MyImages from './MyImages';
// import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import Layout from './Layout/Layout';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const [{ isAuthenticated, user }, dispatch] = useStateValue();

  // const signOutUser = () => {
  //   console.log('Inside Log');
  //   // auth.signOut();
  //   dispatch({
  //     type: actionTypes.LOGOUT,
  //   });
  // };

  if (user === null) {
    console.log('Inside Redirect Block');
    return <Redirect to='/signIn' />;
  }

  return (
    <>
      <Layout />
    </>
  );
};

export default Home;
