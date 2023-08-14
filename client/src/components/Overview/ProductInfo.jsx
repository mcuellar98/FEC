import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';


const ProductInfo = (props) => {

  return (
    <div id='product-info'>
      {props.name}
    </div>
  );
};

export default ProductInfo;