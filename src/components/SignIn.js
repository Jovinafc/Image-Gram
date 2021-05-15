import React from 'react';
import { auth, db } from '../firebase';
import firebase from 'firebase/app';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { Redirect } from 'react-router-dom';
import './SignIn.css';

const SignIn = (props) => {
  const [{ user }, dispatch] = useStateValue();
  const userRef = db.collection(`users`);

  const signWithGoogle = () => {
    auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        dispatch({
          type: actionTypes.LOGIN,
          user: result.user,
        });
        return userRef.doc(result.user.uid).set({
          uid: result.user.uid,
          name: result.user.displayName,
          photo: result.user.photoURL,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      });
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signIn'>
      <div className='signIn__child'>
        <h2>Welcome to ImageGram</h2>
        <button onClick={signWithGoogle}>Sign In With Google</button>
      </div>
    </div>
  );
};

export default SignIn;
