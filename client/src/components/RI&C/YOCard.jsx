import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {partFilled} from './../R&R/Helper.jsx';

const YOCard = ({outfitImage, outfitInfo, productRating, setIdToDelete}) => {

  const outfitImg = useRef(outfitImage);
  if (outfitImg.current === null) {
    outfitImg.current = require('./../../assets/placeholder.png');
  }

  const deleteOutfit = () => {
    setIdToDelete(outfitInfo.id);
  };

  return (
    <div className='yo_card'>
      <span className="delete_outfit" onClick={deleteOutfit}>&times;</span>
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