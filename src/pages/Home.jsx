import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Helmet from '../components/helmet/Helmet';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';

import Services from '../services/Services';
import ProductCard from '../components/UI/ProductCard';
import ProductsList from '../components/UI/ProductsList';

import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock';
import useGetData from '../custom-hooks/useGetData';

const Home = () => {
  const { data: products, loading } = useGetData('products');
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [newArrivals, setnewArrivals] = useState([]);
  const [popularCategory, setPopularCategory] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'chair'
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'sofa'
    );
    const filteredNewArrivals = products.filter(
      (item) => item.category === 'mobile' || item.category === 'wireless'
    );
    const filteredPopularCategory = products.filter(
      (item) => item.category === 'watch'
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setnewArrivals(filteredNewArrivals);
    setPopularCategory(filteredPopularCategory);
  }, [products]);
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
                  <Link to='/shop'>Shop Now</Link>
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
            <Col lg='12' className='text-center md-5'>
              <h2 className='section_title'>Trending Products</h2>
            </Col>

            {loading ? (
              <h5 className='fw-bold'>Loading....</h5>
            ) : (
              <ProductsList data={trendingProducts} />
            )}
          </Row>
        </Container>
      </section>
      <section className='best_sales'>
        <Container>
          <Row>
            <Col lg='12' className='text-center md-5'>
              <h2 className='section_title'>Best Sales</h2>
            </Col>

            {loading ? (
              <h5 className='fw-bold'>Loading....</h5>
            ) : (
              <ProductsList data={bestSalesProducts} />
            )}
          </Row>
        </Container>
      </section>
      {/* ***********fill this Blank******** */}
      <section className='timer_count'>
        <Container>
          <Row>
            <Col lg='6' md='12' className='count_down-col'>
              <div className='clock__top-content'>
                <h4 className='text-white fs-6 mb-2 '>Limted Offer</h4>
                <h3 className='text-white fs-5  mb-3 '>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className='buy__btn store__btn'
              >
                <Link to='/shop'>Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg='6' md='12' className='text-end counter_img'>
              <img src={counterImg} alt='' />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='new_arrivals'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'>New Arrivals</h2>
            </Col>

            {loading ? (
              <h5 className='fw-bold'>Loading....</h5>
            ) : (
              <ProductsList data={newArrivals} />
            )}
          </Row>
        </Container>
      </section>
      <section className='popular_category'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'>Popular Category</h2>
            </Col>
            {loading ? (
              <h5 className='fw-bold'>Loading....</h5>
            ) : (
              <ProductsList data={popularCategory} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
