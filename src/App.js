import './App.css';
import React, { useEffect } from 'react';
import SignIn from './components/SignIn';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { Switch, Route } from 'react-router-dom';
import ImageUpload from './components/ImageUpload';
import MyImages from './components/MyImages';
import ImageList from './components/ImageList';
import Layout from './components/Layout/Layout';
import Navbar from './components/Layout/Navbar';
import AlertDiv from './components/Ui/Alert/AlertDiv';
import SelectedImage from './components/Post/SelectedImage';

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    if (localStorage.user) {
      dispatch({
        type: actionTypes.LOAD_USER,
      });
    }
  }, [dispatch]);

  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path={['/', '/imageUpload', '/myImages', '/myImages/:id']}
          component={Layout}
        >
          <Navbar />
          <AlertDiv />
          <Switch>
            <Route exact path='/' component={ImageList} />
            <Route exact path='/imageUpload' component={ImageUpload} />
            <Route exact path='/myImages' component={MyImages} />
            <Route exact path='/myImages/:id' component={SelectedImage} />
          </Switch>
        </Route>
        <Route exact path='/signIn' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
