import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/helmet/Helmet';

import CommoSection from '../components/UI/CommoSection';
import { useParams } from 'react-router-dom';
import '../styles/productDetails.css';
import { motion } from 'framer-motion';
import ProductsList from '../components/UI/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';
import { doc, getDoc } from 'firebase/firestore';

import useGetData from '../custom-hooks/useGetData';

const ProductDetails = () => {
  const [product, setProducts] = useState({});

  const [tab, setTab] = useState('desc');
  const reviewUser = useRef('');
  const reviwMsg = useRef('');
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const { id } = useParams();

  const { data: products } = useGetData('products');

  const docRef = doc(db, 'products', id);

  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProducts(docSnap.data());
      } else {
      }
    };

    getProduct();
  }, []);

  const {
    imgUrl,
    productName,
    price,
    // avgRating,
    // reviews,
    category,
    description,
    shortDesc,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHanler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviwMsg.current.value;

    const reviewObject = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    toast.success('review submitted');
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        Image: imgUrl,
        productName,
        price,
      })
    );
    toast.success('Product added succesfully');
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommoSection title={productName} />
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
                    </span>
                    <span>
                      <i class='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i class='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i class='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i class='ri-star-half-line'></i>
                    </span>
                  </div>
                  {/* <p>
                    (<span>{avgRating}</span> rating)
                  </p> */}
                </div>
                <div className='d-flex align-items-center gap-4'>
                  <span className='product__price'>${price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>
                <p className='shortDesc mt-3 mb-4'>{shortDesc}</p>

                <motion.button
                  className='buy_btn mt-40 new-btn'
                  whileTap={{ scale: 1.2 }}
                  onClick={addToCart}
                >
                  Add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='tab_wrapper d-flex align-items-center gap-5'>
                <h6
                  className={`${tab === 'desc' ? 'active__tab' : ''}`}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === 'rev' ? 'active__tab' : ''}`}
                  onClick={() => setTab('rev')}
                >
                  {/* Reviews ({reviews.length}) */}
                </h6>
              </div>
              {tab === 'desc' ? (
                <div className='tab__content mt-5'>
                  <p>{description}</p>
                </div>
              ) : (
                <div className='product__review mt-5'>
                  <div className='review__wrapper'>
                    {/* <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className='mb-4'>
                          <h6>John Doe</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul> */}
                    <div className='review__form'>
                      <form action='' onSubmit={submitHanler}>
                        <h4>Leave your experience</h4>
                        <div className='form__group'>
                          <input
                            ref={reviewUser}
                            type='text'
                            placeholder='Enter Name'
                            required
                          />
                        </div>
                        <div className='form__group d-flex align-items-center gap-5 rating_group'>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<i class='ri-star-fill'></i>
                          </motion.span>

                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<i class='ri-star-fill'></i>
                          </motion.span>

                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<i class='ri-star-fill'></i>
                          </motion.span>

                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<i class='ri-star-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5<i class='ri-star-fill'></i>
                          </motion.span>
                        </div>
                        <div className='form__group'>
                          <textarea
                            ref={reviwMsg}
                            rows={4}
                            type='text'
                            placeholder='review Massage'
                            required
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type='submit'
                          className='buy_btn'
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg='12' className='mt-5'>
              <h2 className='related__title'>You might also like this</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
