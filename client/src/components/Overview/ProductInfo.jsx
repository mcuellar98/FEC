import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';


const ProductInfo = ({ product }) => {

  return (
    <div id='product-info'>
      {product.name}
    </div>
  );
};

export default ProductInfo;