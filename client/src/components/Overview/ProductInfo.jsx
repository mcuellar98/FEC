import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { getMetaReviews } from '../../../fetch.jsx';
import { partFilled, average } from '../R&R/Helper.jsx';


const ProductInfo = ({ product }) => {
  const [rating, setRating] = useState(0);
  console.log(product);

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
        <h5>${product.default_price}</h5>
      </span>
    </div>
  );
};

export default ProductInfo;