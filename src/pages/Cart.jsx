import React from 'react';
import Helmet from '../components/helmet/Helmet';
import '../styles/cart.css';

import CommoSection from '../components/UI/CommoSection';
import { Container, Row, Col } from 'reactstrap';
import tbImg from '../assets/images/arm-chair-01.jpg';
import { motion } from 'framer-motion';

const Cart = () => {
  return (
    <Helmet title={'Cart'}>
      <CommoSection title={'Shopping Cart'} />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={tbImg} alt='' />
                    </td>
                    <td>modern</td>
                    <td>$234</td>
                    <td>2px</td>
                    <motion.td whileTap={{ scale: 1.1 }}>
                      <i class='ri-delete-bin-line'></i>
                    </motion.td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col lg='3'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
