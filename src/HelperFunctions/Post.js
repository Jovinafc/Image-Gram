import { db } from '../firebase';
import firebase from 'firebase/app';

export const addLike = (post_id, user_id) => {
  // var uidData = {
  //   likes: [user_id],
  // };
  let postRef = db.collection('posts').doc(post_id);
  // postRef
  //   .update({
  //     likes: firebase.firestore.FieldValue.arrayUnion(user_id),
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     console.log('Updated');
  //   });

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
      // postRef.set(res, { merge: true }).then(() => {
      //   console.log('Updated');
      // });
    });
};

export const addComment = (
  post_id,
  user_id,
  user_name,
  user_image,
  comment
) => {
  let postRef = db.collection('posts').doc(post_id);

  let commentObject = {
    user_uid: user_id,
    user_name: user_name,
    user_image: user_image,
    comment: comment,
    // commentLikes: [],
  };

  postRef
    .update({
      comments: firebase.firestore.FieldValue.arrayUnion(commentObject),
    })
    .then((post) => {
      // console.log(post);
    })
    .catch((err) => {
      // console.log(err);
    });
};
