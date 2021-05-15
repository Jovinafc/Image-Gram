import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import './SelectedImage.css';
import Post from '../Post/Post';
import { addLike, addComment } from '../../HelperFunctions/Post';
import { useHistory } from 'react-router-dom';

const SelectedImage = ({ match }) => {
  const id = match.params.id;
  const [post, setPost] = useState(null);
  const history = useHistory();

  useEffect(() => {
    db.collection('posts')
      .doc(id)
      //   .onSnapshot((snapShot) => console.log(snapShot.id));
      .onSnapshot((doc) => {
        setPost({ id: doc.id, data: doc.data() });
      });
  }, [id]);

  const deleteImage = () => {
    db.collection('posts')
      .doc(id)
      .delete()
      .then(() => {
        // console.log('Image Deleted');
      })
      .catch((err) => {
        // console.log(err);
      });
    history.push('/myImages');
  };

  return post === null ? (
    <div>Loading</div>
  ) : (
    <div className='selectedImage'>
      <Post
        key={post.id}
        post={post}
        addLike={addLike}
        addComment={addComment}
        deleteImage={deleteImage}
      />
    </div>
  );
};

export default SelectedImage;
