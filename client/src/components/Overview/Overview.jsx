import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageView from './ImageView.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductStyles from './ProductStyles.jsx';
import { getProducts, getProductById, getStylesById } from '../../../fetch.jsx';

const Overview = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [productInfo, setProductInfo] = useState({});
  const [styles, setStyles] = useState({});
  const [style, setStyle] = useState(0);

  var getProduct = () => {
    getProducts().then(result => {
      setProduct(result.data[0]);
      //console.log('result', result.data[0]);
      return getProductById(result.data[0].id);
    }).then(result2 => {
      console.log('info', result2.data);
      return getStylesById(result2.data.id);
    }).then(result3 => {
      //console.log('styles:', result3.data);
      setStyles(result3.data);
      setIsLoading(false);
    }).catch(err => {
      console.log('getProducts error', err);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Thinking...</div>
      ) : (
        <div id='overview'>
          <ImageView images={styles.results[5]} />
          <div id='product-info-and-cart'>
            <ProductInfo product={product}/>
            <ProductStyles styles={styles} />
            <div id='product-selection'>product selection</div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Overview;