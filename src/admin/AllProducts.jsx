import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import useGetData from '../custom-hooks/useGetData';

function AllProducts() {
  const { data: productsData } = useGetData('products');

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {productsData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.imgUrl} alt='img' />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.price}$</td>
                    <td>
                      {' '}
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AllProducts;
