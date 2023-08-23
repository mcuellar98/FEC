import React, {useState, useEffect, useRef} from 'react';
import RLCard from './RLCard.jsx';
import {getRelatedProducts} from './../../../fetch.jsx';
import _ from 'underscore';
import $ from 'jquery';

const RelatedProducts = ({product_id, setProductId}) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const scrollRightTarget = useRef(null);
  const [scrollRight, setScrollRight] = useState(true);
  const [scrollLeft, setScrollLeft] = useState(false);

  useEffect(() => {
    if (scrollRightTarget.current !== null) {
      console.log(scrollRightTarget.current.offsetLeft);
      console.log(scrollRightTarget.current.offsetTop);
    }
  }, []);

  const handleScrollRight = (e) => {
    e.preventDefault();
    $('.rl_card').each((index, element) => {
      if ($(element).width() + $(element).position().left > $('#rl_list').width() && $($('.rl_card')[index - 1]).position().left + $($('.rl_card')[index - 1]).width() < $('#rl_list').width()) {
        if (index === $('.rl_card').length - 1) {
          setScrollRight(false);
        }
        if (!scrollLeft) {
          setScrollLeft(true);
        }
        var leftScrollTarget = $('.rl_card')[index];
        leftScrollTarget.scrollIntoView({behavior: 'smooth', block: 'nearest'});
      }
    });
  };

  const handleScrollLeft = (e) => {
    e.preventDefault();
    $('.rl_card').each((index, element) => {
      if ($(element).position().left < 0 && $($('.rl_card')[index + 1]).position().left > 0) {
        if (index === 0) {
          setScrollLeft(false);
        }
        if (!scrollRight) {
          setScrollRight(true);
        }
        var leftScrollTarget = $('.rl_card')[index];
        leftScrollTarget.scrollIntoView({behavior: 'smooth', block: 'nearest'});
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
      {scrollLeft ? <button className='scroll_left_button' onClick={handleScrollLeft}>{'<'}</button> : null}
      {_.map(relatedProducts, (productID, index) => {
        return <RLCard key={productID} overview_product_id={product_id} product_id={productID} setProductId={setProductId}/>;
      })}
      {scrollRight ? <button className='scroll_right_button' onClick={handleScrollRight}>{'>'}</button> : null}
    </div>
  );
};

export default RelatedProducts;