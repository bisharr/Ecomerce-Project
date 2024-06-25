import React, { useState } from 'react';
import Helmet from '../components/helmet/Helmet';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Login</h3>

              <form action='' className='auth__form'>
                <FormGroup className='form__group'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => SetPassword(e.target.value)}
                  />
                </FormGroup>

                <button type='submit' className='buy_btn auth__btn'>
                  Login
                </button>
                <p>
                  Don't have an account ?{' '}
                  <Link to='/sigup'>Create an acount</Link>
                </p>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
