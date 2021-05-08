import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

const Post = ({ key, post }) => {
  console.log(post);
  // console.log(post.data.profilePic);
  // console.log(
  //   'https://lh3.googleusercontent.com/a/AATXAJwBDzsLwn_ovEdOWnfh5DD-XI3_3dkytfo9_v7q=s96-c'
  // );
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar
          src={post.data.profilePic}
          // src='https://lh3.googleusercontent.com/a/AATXAJwBDzsLwn_ovEdOWnfh5DD-XI3_3dkytfo9_v7q=s96-c'
        />
        <h5>{post.data.username || 'Username'}</h5>
      </div>
      <div className='post__image'>
        <img className='post__image--img' src={post.data.imageUrl} />
      </div>
      <div className='post__content'>
        <div className='post__content--top'>
          <div className='post__content--icon'>
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className='post__content--icon'>
            <ChatBubbleOutlineOutlinedIcon />
          </div>
        </div>
        <div className='post__content--caption'>
          <p>
            <strong>{post.data.username || 'Username'}</strong>{' '}
            {post.data.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
