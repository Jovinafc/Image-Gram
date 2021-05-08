import React, { useState } from 'react';
import { storage, db, auth } from '../firebase';
import firebase from 'firebase/app';
import './ImageUpload.css';
import { useStateValue } from '../StateProvider';
import Default from '../images/Default.png';

const ImageUpload = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(Default);
  const [url, setURL] = useState('');
  const [{ user }, dispatch] = useStateValue();

  console.log(user);
  console.log(user.uid);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageData(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleCaption = (e) => {
    e.preventDefault();
    setCaption(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // setURL(url);
            db.collection('posts').add({
              uid: user.uid,
              username: user.displayName,
              caption: caption,
              imageUrl: url,
              profilePic: user.photoURL,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            db.collection(`users/${user.uid}/posts`).add({
              username: user.displayName,
              caption: caption,
              imageUrl: url,
              profilePic: user.photoURL,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            // db.collection(`users`).doc(`${user.uid}`).update({
            //     posts: firebase.firestore.FieldValue.arrayUnion({
            //     caption: "First Image",
            //     imageUrl: url,
            //   })
            // })
          });
      }
    );
  };

  return (
    <div>
      <h2>Upload Your Image</h2>
      <form className='imageForm'>
        <div className='imageForm--image'>
          <img className='image' src={imageData} alt='Sample' />
          <input
            type='file'
            id='file'
            className='imageForm__input'
            onChange={handleChange}
          />
          <label htmlFor='file'>Choose an Image</label>
        </div>

        <div className='imageForm--content'>
          <textarea
            placeholder='Enter caption'
            type='text'
            className='imageForm--content--text'
            onChange={handleCaption}
          />
          <div>
            <button className='imageForm__button' onClick={handleUpload}>
              Upload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;
