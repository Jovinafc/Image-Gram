import './App.css';
import React, { useEffect } from 'react';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import firebase from 'firebase';
import { Redirect } from 'react-router';
import { useStateValue } from './StateProvider';
import Home from './components/Home'
import { actionTypes } from './reducer';

function App() {
  const [{user}, dispatch] = useStateValue();
   useEffect(() => {
    if(localStorage.user){
      dispatch({
        type: actionTypes.LOAD_USER
      })
    }
  }, []);
  
  console.log(user);
  return (
    <div className='App'>
    {
      user ? <Home /> : <SignIn />
    }
    </div> 
    );
}

export default App;
