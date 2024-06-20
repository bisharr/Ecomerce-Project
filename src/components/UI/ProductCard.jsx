import React from 'react';
import productImg from '../../assets/images/arm-chair-01.jpg';
import { motion } from 'framer-motion';
import '../../styles/product-card.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <Col lg='3' md='4'>
      <div className='product_item'>
        <div className='product_img'>
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={productImg}
            alt='productImag'
          />
        </div>
        <div className='p-2 product_info'>
          <h3 className='product_name'>
            <Link to='/shop/id'>Modern Armchair</Link>
          </h3>
          <span>Chair</span>
        </div>

        <div className='product_card-button d-flex align-items-center justify-content-between p-2'>
          <span className='price'>299$</span>
          <motion.span whileTap={{ scale: 1.2 }}>
            <i class='ri-add-line'></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
