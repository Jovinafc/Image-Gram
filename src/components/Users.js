import React from 'react';
import { db } from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Users = () => {
  const userRef = db.collection('users');
  const [users] = useCollectionData(userRef);
  return <div>Users List</div>;
};

export default Users;
