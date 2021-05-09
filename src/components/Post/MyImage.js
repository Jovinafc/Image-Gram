import React from 'react';
import './MyImage.css';

const MyImage = ({ key, post }) => {
  return (
    <div key={key} className='myImage'>
      <img className='myImage__img' src={post.imageUrl} />
      <div className='myImage__overlay'>Likes</div>
    </div>
  );
};

export default MyImage;
