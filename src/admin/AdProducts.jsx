import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { toast } from 'react-toastify';
import { db, storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function AdProducts() {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterImgProduct, setEnterImgProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    // const product = {
    //   title: enterTitle,
    //   shortDesc: enterShortDesc,
    //   description: enterDescription,
    //   category: enterCategory,
    //   price: enterPrice,
    //   imgUrl: enterImgProduct,
    // };

    // Add product to the firebase database

    try {
      const docRef = await collection(db, 'products');
      const storageRef = ref(
        storage,
        `productImage/${Date.now() + enterImgProduct.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterImgProduct);

      uploadTask.on(
        () => {
          toast.error('images not uloaded');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success('product successfully added');
      navigate('/dashboard/all-products');
    } catch (err) {
      setLoading(false);
      toast.error('product not added');
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            {loading ? (
              <h4 className='py-5'>Loading....</h4>
            ) : (
              <>
                <h4 className='mb-5'>Add Products</h4>
                <Form onSubmit={addProduct}>
                  <FormGroup className='form__group'>
                    <span> Product Title</span>
                    <input
                      type='text'
                      placeholder='Double sofa'
                      value={enterTitle}
                      onChange={(e) => setEnterTitle(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <span>short description</span>
                    <input
                      type='text'
                      placeholder='lerem...'
                      value={enterShortDesc}
                      onChange={(e) => setEnterShortDesc(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <span>Description</span>
                    <input
                      type='text'
                      placeholder='Description...'
                      value={enterDescription}
                      onChange={(e) => setEnterDescription(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <div className='d-flex align-items-center justify-content-between gap-5'>
                    <FormGroup className='form__group w-50'>
                      <span>Price</span>
                      <input
                        type='number'
                        placeholder='100$'
                        value={enterPrice}
                        onChange={(e) => setEnterPrice(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className='form__group w-50'>
                      <span>Category</span>
                      <select
                        className='w-100 p-2'
                        value={enterCategory}
                        onChange={(e) => setEnterCategory(e.target.value)}
                        required
                      >
                        <option>Select product</option>
                        <option value='chair'>Chair</option>
                        <option value='mobile'>Mobile</option>
                        <option value='sofa'>Sofa</option>
                        <option value='watch'>Watch</option>
                        <option value='wireless'>Wireless</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div>
                    <FormGroup className='form__group'>
                      <span>Product Image</span>
                      <input
                        type='file'
                        onChange={(e) => setEnterImgProduct(e.target.files[0])}
                        required
                      />
                    </FormGroup>
                  </div>
                  <button className='buy_btn' type='submit'>
                    Add Product
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AdProducts;
