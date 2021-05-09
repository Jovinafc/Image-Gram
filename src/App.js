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

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    if (localStorage.user) {
      dispatch({
        type: actionTypes.LOAD_USER,
      });
    }
  }, []);

  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path={['/', '/imageUpload', '/myImages']}
          component={Layout}
        >
          <Navbar />
          <Switch>
            <Route exact path='/' component={ImageList} />
            <Route exact path='/imageUpload' component={ImageUpload} />
            <Route exact path='/myImages' component={MyImages} />
          </Switch>
        </Route>
        <Route exact path='/signIn' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
