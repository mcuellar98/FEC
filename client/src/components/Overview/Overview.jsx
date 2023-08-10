import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Overview = () => {
  return (
    <div>
      <div id='images'>Images</div>
      <div id='product-info-and-cart'>
        info & cart
        <div id='product-info'>product info</div>
        <div id='product-styles'>product syles</div>
        <div id='product-selection'>product selection</div>
      </div>
    </div>
  );
};

export default Overview;