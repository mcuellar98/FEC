import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageView from './ImageView.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductStyles from './ProductStyles.jsx';
import { getProducts, getProductById, getStylesById } from '../../../fetch.jsx';

const Overview = () => {

  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState({});

  var getProduct = () => {
    getProducts().then(result => {
      setProduct(result.data[0]);
      console.log('result', result.data[0]);
      return getProductById(result.data[0].id);
    }).then(result2 => getStylesById(result2.data.id))
      .then(result3 => {
        setStyles(result3.data);
      }).catch(err => {
        console.log('getProducts error', err);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div id='overview'>
      <ImageView />
      <div id='product-info-and-cart'>
        <ProductInfo product={product}/>
        <ProductStyles styles={styles} />
        <div id='product-selection'>product selection</div>
      </div>
    </div>
  );
};

export default Overview;