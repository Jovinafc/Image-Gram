import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Post from './Post/Post';
import './ImageList.css';
import firebase from 'firebase/app';
import { useStateValue } from '../StateProvider';

const ImageList = () => {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  const dummyFn = (post_id) => {
    console.log('Dummy Func', post_id);
  };

  const addLike = (post_id, user_id) => {
    var uidData = {
      likes: [user_id],
    };
    console.log(post_id, ' - ', user_id);
    let postRef = db.collection('posts').doc(post_id);
    // postRef
    //   .update({
    //     likes: firebase.firestore.FieldValue.arrayUnion(user_id),
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     console.log('Updated');
    //   });

    let updatedLike;
    postRef
      .get()
      .then((doc) => {
        if (doc.data().likes) {
          if (doc.data().likes.filter((like) => like === user_id).length > 0) {
            // console.log('Already Liked, unliking it');
            // updatedLike = doc.data().likes.filter((item) => item !== user_id);
            // console.log(updatedLike);
            postRef.update({
              likes: firebase.firestore.FieldValue.arrayRemove(user_id),
            });
          } else {
            // console.log('Liking');
            // updatedLike = [...doc.data().likes, user_id];
            // console.log(updatedLike);
            postRef.update({
              likes: firebase.firestore.FieldValue.arrayUnion(user_id),
            });
          }
          // let updatedLikeObj = {
          //   likes: updatedLike,
          // };
          // return updatedLikeObj;
        } else {
          postRef.update({
            likes: firebase.firestore.FieldValue.arrayUnion(user_id),
          });
        }
        // else {
        //   return uidData;
        // }
      })
      .then((res) => {
        console.log(res);
        // postRef.set(res, { merge: true }).then(() => {
        //   console.log('Updated');
        // });
      });
  };

  //Comments
  /*
    uid
    user name
    user profile pic
    comment_text,
    timestamp,
    likes
  */

  const addComment = (post_id, user_id, user_name, user_image, comment) => {
    let postRef = db.collection('posts').doc(post_id);

    let commentObject = {
      user_uid: user_id,
      user_name: user_name,
      user_image: user_image,
      comment: comment,
      // commentLikes: [],
    };

    console.log(commentObject);

    postRef
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion(commentObject),
      })
      .then((post) => {
        console.log(post);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(posts);

  return (
    <div className='postImageCont'>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              dummyFn={dummyFn}
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
