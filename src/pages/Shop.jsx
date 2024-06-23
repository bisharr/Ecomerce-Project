import React, { useState } from 'react';
import Helmet from '../components/helmet/Helmet';
import CommoSection from '../components/UI/CommoSection';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'sofa') {
      const filterProducts = products.filter(
        (item) => item.category === 'sofa'
      );
      setProductsData(filterProducts);
    }
    if (filterValue === 'mobile') {
      const filterProducts = products.filter(
        (item) => item.category === 'mobile'
      );
      setProductsData(filterProducts);
    }
    if (filterValue === 'wireless') {
      const filterProducts = products.filter(
        (item) => item.category === 'wireless'
      );
      setProductsData(filterProducts);
    }
    if (filterValue === 'chair') {
      const filterProducts = products.filter(
        (item) => item.category === 'chair'
      );
      setProductsData(filterProducts);
    }
    if (filterValue === 'watch') {
      const filterProducts = products.filter(
        (item) => item.category === 'watch'
      );
      setProductsData(filterProducts);
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };
  return (
    <Helmet title={'Shop'}>
      <CommoSection title='Products' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className='filter__widget'>
                <select onClick={handleFilter}>
                  <option>Filter By category</option>
                  <option value='sofa'>Sofa</option>
                  <option value='mobile'>Mobile</option>
                  <option value='chair'>Chair</option>
                  <option value='watch'>Watch</option>
                  <option value='wireless'>Wireless</option>
                </select>
              </div>
            </Col>

            <Col lg='3' md='6' className='text-end'>
              <div className='filter__widget'>
                <select>
                  <option>Sort By </option>
                  <option value='ascending'>Ascending</option>
                  <option value='descending'>Descending</option>
                </select>
              </div>
            </Col>

            <Col lg='6' md='12'>
              <div className='search__box'>
                <input
                  type='text'
                  placeholder='Search....'
                  onChange={handleSearch}
                />
                <span>
                  <i class='ri-search-line'></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className='text-center fs-4'>No Products are found</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
