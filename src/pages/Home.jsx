import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Helmet from '../components/helmet/Helmet';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';

import Services from '../services/Services';
import ProductCard from '../components/UI/ProductCard';
import ProductsList from '../components/UI/ProductsList';

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={'Home'}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero_content'>
                <p className='hero_subtitle'>Trending product in {year} </p>
                <h2>Make Your interior More Minimalistic & Modern </h2>
                <p>
                  Transform your space with sleek, minimalist designs. Our
                  modern furnishings blend functionality and style for a serene,
                  clutter-free environment. Elevate your home with simplicity
                  and elegance.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'>
                  <Link to='shop'>Shop Now</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='hero_img'>
                <img src={heroImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />

      <section className='trending_products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'>Trending Products</h2>
            </Col>
            <ProductsList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
