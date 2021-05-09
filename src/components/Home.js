import React from 'react';
import { useStateValue } from '../StateProvider';
import Layout from './Layout/Layout';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const [{ isAuthenticated, user }, dispatch] = useStateValue();
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
