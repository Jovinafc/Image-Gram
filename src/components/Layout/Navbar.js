import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
//import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import './Navbar.css';
import { Link, Redirect } from 'react-router-dom';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';

const Navbar = () => {
  const [, dispatch] = useStateValue();

  const signOutUser = () => {
    dispatch({
      type: actionTypes.LOGOUT,
    });
  };

  if (!localStorage.getItem('user')) {
    return <Redirect to='/signIn' />;
  }

  return (
    <nav className='navbar'>
      <div className='navbar__Header'>
        <h1>ImageGram</h1>
      </div>
      <div className='navbar__navItems'>
        <div className='navbar__navOptions'>
          <Link to='/'>
            <HomeOutlinedIcon />
          </Link>
        </div>
        <div className='navbar__navOptions'>
          <Link to='/myImages'>
            <ListAltOutlinedIcon />
          </Link>
        </div>

        <div className='navbar__navOptions'>
          <Link to='/imageUpload'>
            <AddAPhotoOutlinedIcon />
          </Link>
        </div>

        <div onClick={signOutUser} className='navbar__navOptions'>
          <ExitToAppOutlinedIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
