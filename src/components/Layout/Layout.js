import React from 'react';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import ImageList from '../ImageList';
import ImageUpload from '../ImageUpload';
import MyImages from '../MyImages';

const Layout = (props) => {
  console.log('fekn');
  return (
    <div>
      <Navbar />
      {/* <div>{props.children}</div> */}
      {/* <Switch>
        <Route exact path='/' component={ImageList} />
        <Route exact path='/imageUpload' component={ImageUpload} />
        <Route exact path='/myImages' component={MyImages} />
      </Switch> */}
    </div>
  );
};

export default Layout;
