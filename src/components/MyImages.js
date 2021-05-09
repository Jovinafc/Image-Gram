import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';
import MyImage from './Post/MyImage';
import './MyImages.css';

const MyImages = () => {
  const [{ user }, dispatch] = useStateValue();
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection(`users/${user.uid}/posts`)
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setMyPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [user]);

  return (
    <div className='myImages'>
      <h3>My Images</h3>

      <div className='myImages__Cont'>
        {myPosts.map((post, index) => (
          <MyImage key={post.id} post={post.data} />
        ))}
      </div>
    </div>
  );
};

export default MyImages;
