import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {getProductById, getStylesById, getReviewsById} from './../../../fetch.jsx';
import {partFilled} from './../R&R/Helper.jsx';
import CompareProducts from './CompareProducts.jsx';

const YOCard = ({outfitImage, outfitInfo, productRating}) => {
  const outfitImg = useRef(outfitImage);
  if (outfitImg.current === null) {
    outfitImg.current = require('./../../assets/no_pic.png');
  }

  return (
    <div className='rl_card'>
      <span className="delete_outfit">&times;</span>
      <img className = 'rl_card_image' src={outfitImg.current}/>
      <div className='rl_card_text'>
        <p className='rl_card_category'>Category: {outfitInfo.category}</p>
        <p className='rl_card_name'>{outfitInfo.name}</p>
        <p className='rl_card_price'>{outfitInfo.default_price}</p>
        {partFilled(productRating)}
      </div>
    </div>
  );
};

export default YOCard;