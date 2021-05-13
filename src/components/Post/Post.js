import React, { useState, useEffect } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { useStateValue } from '../../StateProvider';

const Post = ({ key, post, addLike, dummyFn, addComment }) => {
  const [{ user }, dispatch] = useStateValue();
  const [toggle, setToggle] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
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

  const commentAdd = (e) => {
    e.preventDefault();
    addComment(post.id, user.uid, user.displayName, user.photoURL, comment);
    setComment('');
  };

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
            <ChatBubbleOutlineOutlinedIcon />{' '}
            {post.data.comments ? (
              <p className='post__likedCount'>{post.data.comments.length}</p>
            ) : (
              <p className='post__likedCount'>0</p>
            )}
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

      <div className='post__comments'>
        <div className='post__commentOutput'>
          {post.data.comments ? (
            <div>
              {post.data.comments.length > 2 ? (
                <p className='post__viewMore'>
                  View more {post.data.comments.length - 2}
                </p>
              ) : null}
              {post.data.comments.slice(-2).map((p) => (
                <div className='post__comment'>
                  <p>
                    <strong>{p.user_name}</strong> {p.comment}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div>No Comments</div>
          )}
        </div>
        <div className='post__commentInput'>
          <form
            // onSubmit={(e) =>
            //   addComment(
            //     e,
            //     post.id,
            //     user.uid,
            //     user.displayName,
            //     user.photoURL,
            //     comment
            //   )
            // }
            className='post__commentInput--form'
          >
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Add a comment'
            />
            <button className='post__button' onClick={commentAdd} type='submit'>
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
