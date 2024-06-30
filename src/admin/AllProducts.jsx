import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { db } from '../firebase.config';
import { doc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

import useGetData from '../custom-hooks/useGetData';

function AllProducts() {
  const { data: productsData, loading } = useGetData('products');

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, 'products', id));
    toast.success('product deleted!');
  };

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
                {loading ? (
                  <h4 className='py-5 text-center fw-bold'>Loading....</h4>
                ) : (
                  productsData.map((item, index) => (
                    <tr key={item.id || index}>
                      <td>
                        <img src={item.imgUrl} alt='img' />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>{item.price}$</td>
                      <td>
                        <button
                          onClick={() => {
                            deleteProduct(item.id);
                          }}
                          className='btn btn-danger'
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AllProducts;
