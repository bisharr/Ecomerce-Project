import React, { useRef, useEffect } from 'react';
import './header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Container, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const nav_links = [
  {
    path: 'home',
    display: 'Home',
  },
  {
    path: 'shop',
    display: 'Shop',
  },
  {
    path: 'cart',
    display: 'Cart',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionRef = useRef(null);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const stickyHeaderFun = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logged out');
        navigate('/home');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickyHeaderFun();

    return () => window.removeEventListener('scroll', stickyHeaderFun);
  });

  const menuToggle = () => menuRef.current.classList.toggle('active_menu');
  const navigateToCart = () => {
    navigate('/cart');
  };

  // const toggleProfileActions = () =>
  //   profileActionRef.current.classList.toggle('show');

  const toggleProfileActions = () => {
    console.log('Profile image clicked'); // Debug log
    profileActionRef.current.classList.toggle('show_profile');
    document.querySelector('.show_profile').style.display = 'block';

    console.log(profileActionRef.current.classList); // Debug log
  };
  const hideLogOut = () => {
    document.querySelector('.show_profile').style.display = 'none';
  };

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav_wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo' />
              <div>
                <h1>
                  <span className='header-logo'>Elite</span>-Store
                </h1>
              </div>
            </div>
            <div className='navigation' ref={menuRef} onClick={menuToggle}>
              <motion.ul whileTap={{ scale: 1.2 }} className='menu'>
                {nav_links.map((item, index) => (
                  <li className='nav_item' key={index}>
                    {' '}
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'nav_active' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </motion.ul>
            </div>
            <div className='nav__icons'>
              <span className='fav_icon'>
                <i className='ri-heart-line'></i>
                <span className='badge'>1</span>
              </span>
              <span className='cart_icon' onClick={navigateToCart}>
                <i className='ri-shopping-bag-line'></i>
                <span className='badge'>{totalQuantity}</span>
              </span>
              <div className='profile'>
                <motion.img
                  className='profile-img'
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=''
                  onClick={toggleProfileActions}
                />
                <div
                  className='profile__actions'
                  ref={profileActionRef}
                  onClick={hideLogOut}
                >
                  {currentUser ? (
                    <span onClick={logOut}>Logout</span>
                  ) : (
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                      <Link to='/signup'>Signup</Link>
                      <Link to='/login'>Login</Link>
                      <Link to='/dashboard'>dashboard</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className='mobile_menu'>
                <span onClick={menuToggle}>
                  <i className='ri-menu-line'></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
