import React from 'react';
import { auth, db } from '../firebase';
import firebase from 'firebase/app';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const SignIn = (props) => {
  const [state, dispatch] = useStateValue();
  const userRef = db.collection(`users`);

  const signWithGoogle = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result) => {
      console.log(result.user);
      console.log(result.user.uid);
      dispatch({
        type: actionTypes.LOGIN,
        user: result.user
      })
      return userRef.doc(result.user.uid).set({
        uid: result.user.uid,
        name: result.user.displayName,
        photo: result.user.photoURL,      
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
    });
  };

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
