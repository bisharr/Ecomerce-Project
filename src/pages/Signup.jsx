import React, { useState } from 'react';
import Helmet from '../components/helmet/Helmet';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';

const Signup = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [userName, SetuserName] = useState('');
  const [files, SetFiles] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log(user);
    } catch (error) {}
  };
  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Sign up</h3>

              <form action='' className='auth__form' onSubmit={signup}>
                <FormGroup className='form__group'>
                  <input
                    type='text'
                    placeholder='Enter userName'
                    value={userName}
                    onChange={(e) => SetuserName(e.target.value)}
                  />
                </FormGroup>
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
                <FormGroup className='form__group'>
                  <input
                    type='file'
                    onChange={(e) => SetFiles(e.target.files[0])}
                  />
                </FormGroup>

                <button type='submit' className='buy_btn auth__btn'>
                  SigUp
                </button>
                <p>
                  Already have an acount ? <Link to='/login'>Login</Link>
                </p>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
