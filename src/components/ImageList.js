import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Post from './Post/Post';
import './ImageList.css';

const ImageList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  console.log(posts);

  return (
    <div className='postImageCont'>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>No Posts </div>
      )}
    </div>
  );
};

export default ImageList;
