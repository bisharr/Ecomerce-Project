import React, { useRef, useEffect } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

import { Container, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';

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
  const menuRef = useRef(null);

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

  useEffect(() => {
    stickyHeaderFun();

    return () => window.removeEventListener('scroll', stickyHeaderFun);
  });

  const manuToggle = () => menuRef.current.classList.toggle('active_menu');

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <div className='nav_wrapper'>
          <div className='logo'>
            <img src={logo} alt='logo' />
            <div>
              <h1>
                <span className='header-logo'>Elite</span>-Store
              </h1>
            </div>
          </div>
          <div className='navigation' ref={menuRef} onClick={manuToggle}>
            <ul className='menu'>
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
            </ul>
          </div>
          <div className='nav__icons'>
            <span className='fav_icon'>
              <i class='ri-heart-line'></i>
              <span className='badge'>1</span>
            </span>
            <span className='cart_icon'>
              <i class='ri-shopping-bag-line'></i>
              <span className='badge'>1</span>
            </span>
            <span>
              <motion.img
                whileTap={{ scale: 1.2 }}
                src={userIcon}
                alt='user-icon'
              />
            </span>
            <div className='mobile_menu'>
              <span onClick={manuToggle}>
                <i class='ri-menu-line'></i>
              </span>
            </div>
          </div>
        </div>
        <Row></Row>
      </Container>
    </header>
  );
};

export default Header;
