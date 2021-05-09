import './App.css';
import React, { useEffect } from 'react';
import SignIn from './components/SignIn';
import { useStateValue } from './StateProvider';
import Home from './components/Home';
import { actionTypes } from './reducer';
import { Switch, Route, Redirect } from 'react-router-dom';
import ImageUpload from './components/ImageUpload';
import MyImages from './components/MyImages';
import ImageList from './components/ImageList';
import Layout from './components/Layout/Layout';
import Navbar from './components/Layout/Navbar';

function App() {
  const [{ user, isAuthenticated }, dispatch] = useStateValue();
  useEffect(() => {
    if (localStorage.user) {
      dispatch({
        type: actionTypes.LOAD_USER,
      });
    }
  }, []);

  // console.log(user);
  // console.log(isAuthenticated);
  // if (isAuthenticated === false) {
  //   console.log('Redirect Block');
  //   <Redirect to='/' />;
  // }
  return (
    <div className='App'>
      <Switch>
        {/* {user ? <Home /> : <SignIn />} */}
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
