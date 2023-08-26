import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageView from './ImageView.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductSelection from './ProductSelection.jsx';
import ProductStyles from './ProductStyles.jsx';
import {getStylesById } from '../../../fetch.jsx';

const Overview = ({id, setOutfitImage, productInfo}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState({});
  const [style, setStyle] = useState(0);

  var getProduct = () => {
    setProduct(productInfo.data);
    getStylesById(productInfo.data.id)
      .then(result3 => {
        setStyles(result3.data.results);
        setOutfitImage(result3.data.results[0].photos[0].thumbnail_url);
        setIsLoading(false);
      }).catch(err => {
        console.log('getProducts error', err);
      });
  };

  var setStyleIndex = (style) => {
    setStyle(style);
  };

  useEffect(() => {
    getProduct();
  }, [productInfo]);

  return (
    <div>
      {isLoading ? (
        <div>Thinking...</div>
      ) : (
        <div id='overview'>
          <ImageView images={styles[style]} />
          <div id='product-info-and-cart'>
            <ProductInfo product={product} info={styles[style]}/>
            <ProductStyles styles={styles} style={style} setStyleIndex={(n) => setStyleIndex(n)}/>
            <ProductSelection style={styles[style]}/>
          </div>
        </div>
      )}

    </div>
  );
};

export default Overview;