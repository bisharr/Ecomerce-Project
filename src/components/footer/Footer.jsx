import React from 'react';
import './footer.css';
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className='logo'>
              <div>
                <h1 className='text-white'>Elite-Store</h1>
              </div>
              <p className='footer__text mt-4'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores corrupti sapiente mollitia dolor ex rerum soluta saepe
                aliquid, nihil eaque?
              </p>
            </div>
          </Col>
          <Col lg='3'>
            <div className='footer__quick-link'>
              <h4 className='quick__links-title'>Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'> Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'> Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
            <div className='footer__quick-link'>
              <h4 className='quick__links-title'>Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'> Privacy policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
            <div className='footer__quick-link'>
              <h4 className='quick__links-title'>Contacts</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class='ri-map-pin-line'></i>
                  </span>
                  <p>Mengo,Kampal, Uganda</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class='ri-phone-line'></i>
                  </span>
                  <p>+256703240815 / +256703815228</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class='ri-mail-line'></i>
                  </span>

                  <a className='gmail' href='mailto:bishar995@gmail.com'>
                    Bishar995@gmail.com
                  </a>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className='footer__copyright'>
              Copyright {year} developed by Bishar and Abdullahi Ali. All rights
              reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
