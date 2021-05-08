import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
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
          <ListAltOutlinedIcon />
        </div>

        <div className='navbar__navOptions'>
          <Link to='/imageUpload'>
            <AddAPhotoOutlinedIcon />
          </Link>
        </div>

        <div className='navbar__navOptions'>
          <ExitToAppOutlinedIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
