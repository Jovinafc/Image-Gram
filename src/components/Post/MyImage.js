import React from 'react';
import './MyImage.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { Link } from 'react-router-dom';

const MyImage = ({ id, post }) => {
  return (
    <Link to={`/myImages/${id}`}>
      <div key={id} className='myImage'>
        <img className='myImage__img' src={post.imageUrl} alt='' />
        <div className='myImage__overlay'>
          <FavoriteIcon />
          <p>{post.likes ? post.likes.length : 0}</p>

          <ChatBubbleOutlineOutlinedIcon />
          <p>{post.comments ? post.comments.length : 0}</p>
        </div>
      </div>
    </Link>
  );
};

export default MyImage;
