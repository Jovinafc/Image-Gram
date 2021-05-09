import React, { useState, useEffect } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { useStateValue } from '../../StateProvider';

const Post = ({ key, post, addLike, dummyFn }) => {
  const [{ user }, dispatch] = useStateValue();
  const [toggle, setToggle] = useState(false);
  const [liked, setLiked] = useState(false);
  // console.log(post);
  // console.log(post.data.profilePic);
  // console.log(
  //   'https://lh3.googleusercontent.com/a/AATXAJwBDzsLwn_ovEdOWnfh5DD-XI3_3dkytfo9_v7q=s96-c'
  // );

  const toggleClick = (e) => {
    e.preventDefault();
    setToggle((prevToggle) => !prevToggle);
  };

  useEffect(() => {
    if (
      post.data.likes &&
      post.data.likes.filter((like) => like === user.uid).length > 0
    ) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [post]);

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
          <div className='post__content--icon liked'>
            <FavoriteIcon
              className='fav'
              style={liked ? { color: 'red' } : { color: 'black' }}
              onClick={() => addLike(post.id, user.uid)}
            />
            {post.data.likes ? (
              <p className='post__likedCount'>{post.data.likes.length}</p>
            ) : (
              <p className='post__likedCount'>0</p>
            )}
          </div>
          <div onClick={() => dummyFn(post.id)} className='post__content--icon'>
            <ChatBubbleOutlineOutlinedIcon />
          </div>
        </div>
        <div className='post__content--caption'>
          <p
            className={
              toggle ? 'post__content--paraClick' : 'post__content--para'
            }
            // className='post__content--para'
            onClick={toggleClick}
          >
            <strong>{post.data.username || 'Username'}</strong>{' '}
            {post.data.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
