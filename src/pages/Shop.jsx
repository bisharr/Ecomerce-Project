import React from 'react';
import Helmet from '../components/helmet/Helmet';
import CommoSection from '../components/UI/CommoSection';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';

const Shop = () => {
  return (
    <Helmet title={'Shop'}>
      <CommoSection title='Products' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className='filter__widget'>
                <select>
                  <option>Filter By category</option>
                  <option value='sofa'>Sofa</option>
                  <option value='mobile'>Mobile</option>
                  <option value='chair'>Chair</option>
                  <option value='watch'>Watch</option>
                  <option value='wireless'>Wireless</option>
                </select>
              </div>
            </Col>

            <Col lg='3' md='3'>
              <div className='filter__widget'>
                <select>
                  <option>Sort By </option>
                  <option value='ascending'>Ascending</option>
                  <option value='descending'>Descending</option>
                </select>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='search__box'>
                <input type='text' placeholder='Search....' />
                <span>
                  <i class='ri-search-line'></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
