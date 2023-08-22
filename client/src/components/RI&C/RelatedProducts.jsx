import React, {useState, useEffect, useRef} from 'react';
import RLCard from './RLCard.jsx';
import {getRelatedProducts} from './../../../fetch.jsx';
import _ from 'underscore';
import $ from 'jquery';

const RelatedProducts = ({product_id}) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const scrollRightTarget = useRef(null);

  useEffect(() => {
    if (scrollRightTarget.current !== null) {
      console.log(scrollRightTarget.current.offsetLeft);
      console.log(scrollRightTarget.current.offsetTop);
    }
  }, []);

  const handleScrollRight = (e) => {
    e.preventDefault();
    $('.rl_card').each((index, element) => { console.log($(element).position()); });
    // $('#rl_list').children()[4].scrollIntoView({behavior:"smooth", block: 'nearest'});
  };

  const handleScrollLeft = (e) => {
    e.preventDefault();
    var leftScrollTarget = null;
    $('.rl_card').each((index, element) => {
      if ($(element).position().left < 0 && $($('.rl_card')[index + 1]).position().left > 0) {
        leftScrollTarget = $('.rl_card')[index];
        leftScrollTarget.scrollIntoView({behavior:"smooth", block: 'nearest'});
      }
    });

  };

  useEffect(() => {
    getRelatedProducts(product_id)
      .then((result) => {
        setRelatedProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id='rl_list' className='related_products_container'>
      <button className='scroll_left_button' onClick={handleScrollLeft}>Left</button>
      {_.map(relatedProducts, (productID, index) => {
        return <RLCard key={productID} product_id={productID}/>;
      })}
      <button className='scroll_right_button' onClick={handleScrollRight}>Right</button>
    </div>
  );
};

export default RelatedProducts;