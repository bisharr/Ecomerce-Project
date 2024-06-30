import React, { useState, useEffect } from 'react';
import { db } from '../firebase.config';
import { collection, getDocs } from 'firebase/firestore';

const useGetData = (collectionName) => {
  const [data, setData] = useState([]);
  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collectionRef);

      setData(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getData();
  }, []);

  return { data };
};

export default useGetData;
