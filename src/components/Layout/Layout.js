import React from 'react';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import ImageList from '../ImageList';
import ImageUpload from '../ImageUpload';

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <Switch>
        <Route exact path='/' component={ImageList} />
        <Route exact path='/imageUpload' component={ImageUpload} />
      </Switch>
    </div>
  );
};

export default Layout;
