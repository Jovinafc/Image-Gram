import React from 'react';
import { auth, db } from '../firebase';
import firebase from 'firebase/app';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { Redirect } from 'react-router-dom';

const SignIn = (props) => {
  const [{ user }, dispatch] = useStateValue();
  const userRef = db.collection(`users`);

  const signWithGoogle = () => {
    auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        console.log(result.user);
        console.log(result.user.uid);
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
    console.log('Inside Redirect Block');
    return <Redirect to='/' />;
  }

  return (
    <div>
      SignIn Form
      <div>
        <button onClick={signWithGoogle}>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
