import React from 'react';
import './MyImage.css';
import FavoriteIcon from '@material-ui/icons/Favorite';

const MyImage = ({ id, post }) => {
  return (
    <div key={id} className='myImage'>
      <img className='myImage__img' src={post.imageUrl} />
      <div className='myImage__overlay'>
        <FavoriteIcon />
        <p>{post.likes ? post.likes.length : 0}</p>
      </div>
    </div>
  );
};

export default MyImage;
