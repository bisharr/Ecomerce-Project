import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/helmet/Helmet';
import products from '../assets/data/products';
import CommoSection from '../components/UI/CommoSection';
import { useParams } from 'react-router-dom';
import '../styles/productDetails.css';
import { motion } from 'framer-motion';

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const product = products.find((item) => item.id === id);
  console.log(product);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    description,
    shortDesc,
  } = product;

  return (
    <Helmet>
      <CommoSection />
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt='' />
            </Col>
            <Col lg='6'>
              <div className='product__details'>
                <h2>{productName}</h2>
                <div className='product__rating d-flex align-items-center gap-5 mb-3'>
                  <div>
                    <span>
                      <i class='ri-star-s-fill'></i>
                      <i class='ri-star-s-fill'></i>
                      <i class='ri-star-s-fill'></i>
                      <i class='ri-star-s-fill'></i>
                      <i class='ri-star-half-line'></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> rating)
                  </p>
                </div>
                <span className='product__price'>${price}</span>
                <p className='shortDesc mt-3 mb-4'>{shortDesc}</p>

                <motion.button
                  className='buy_btn mt-40 new-btn'
                  whileTap={{ scale: 1.2 }}
                >
                  Add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
