import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { getMetaReviews } from '../../../fetch.jsx';
import { partFilled, average } from '../R&R/Helper.jsx';


const ProductInfo = ({ product, info }) => {
  const [rating, setRating] = useState(0);

  var getMRating = (prodID) => {
    getMetaReviews(prodID)
      .then((resp) => {
        setRating(average(resp.data));
      }) .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMRating(product.id);
  }, []);

  return (
    <div id='product-info'>
      <span>
        <span>
          {partFilled(rating)}
        </span>
        <h4>{product.category}</h4>
        <h1>{product.name}</h1>
        {info.sale_price ? (
          <h5><s>${product.default_price}</s> | <b>${info.sale_price}</b></h5>
        ) : (
          <h5>${product.default_price}</h5>
        )}
      </span>
    </div>
  );
};

export default ProductInfo;