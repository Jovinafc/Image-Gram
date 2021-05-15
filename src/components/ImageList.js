import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Post from './Post/Post';
import './ImageList.css';
// import { useStateValue } from '../StateProvider';
import { addLike, addComment } from '../HelperFunctions/Post';

const ImageList = () => {
  // const [, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className='postImageCont'>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              addLike={addLike}
              addComment={addComment}
            />
          ))}
        </div>
      ) : (
        <div>No Posts </div>
      )}
    </div>
  );
};

export default ImageList;
