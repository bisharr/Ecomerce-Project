import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/helmet/Helmet';
import products from '../assets/data/products';
import CommoSection from '../components/UI/CommoSection';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { imgUrl } = product;

  return (
    <Helmet title={'ProductDetails'}>
      <CommoSection />
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <p>Heloo</p>
            </Col>
            <Col lg='6'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
