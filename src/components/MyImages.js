import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';
import MyImage from './Post/MyImage';
import './MyImages.css';

const MyImages = () => {
  const [{ user }, dispatch] = useStateValue();
  const [myPosts, setMyPosts] = useState([]);

  console.log(user);
  useEffect(() => {
    if (user) {
      db.collection('posts')
        .where('uid', '==', user.uid)
        .orderBy('timestamp', 'desc')
        .get()
        .then((snapshot) =>
          setMyPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );

      // db.collection(`users/${user.uid}/posts`)
      //   .orderBy('timestamp', 'desc')
      //   .onSnapshot((snapshot) =>
      //     setMyPosts(
      //       snapshot.docs.map((doc) => ({
      //         id: doc.id,
      //         data: doc.data(),
      //       }))
      //     )
      //   );
    }
  }, [user]);

  return user ? (
    <div className='myImages'>
      <div className='myImages__header'>
        <div className='myImages__left'>
          <img className='myImages__img' src={user.photoURL} />
        </div>
        <div className='myImages__right'>
          <p className='myImages__username'>{user.displayName}</p>

          <p>{myPosts.length} posts</p>
        </div>
      </div>

      <div className='myImages__Cont'>
        {myPosts.map((post, index) => (
          <MyImage key={post.id} id={post.id} post={post.data} />
        ))}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MyImages;
