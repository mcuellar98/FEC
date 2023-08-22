import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {getProductById, getStylesById, getReviewsById} from './../../../fetch.jsx';
import {partFilled} from './../R&R/Helper.jsx';

const RLCard = ({product_id, scrollRightTarget}) => {

  const [product, setProduct] = useState({});
  const [cardImage, setCardImage] = useState('');
  const [averageReview, setAverageReivew] = useState(0);

  useEffect(() => {
    getProductById(product_id)
      .then((result) => {
        setProduct(result.data);
        return getStylesById(product_id);
      })
      .then((result) => {
        setCardImage(result.data.results[0].photos[0].thumbnail_url);
        return getReviewsById(product_id);
      })
      .then((result) => {
        var sum = 0;
        result.data.results.forEach((obj) => {
          sum += obj.rating;
        });
        setAverageReivew(sum / result.data.results.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='rl_card' >
      <span className="rl_card_star">★</span>
      <img className = 'rl_card_image' src={cardImage}/>
      <div className='rl_card_text'>
        <p className='rl_card_category'>Category: {product.category}</p>
        <p className='rl_card_name'>{product.name}</p>
        <p className='rl_card_price'>${product.default_price}</p>
        {partFilled(averageReview)}
      </div>
    </div>
  );
};

export default RLCard;