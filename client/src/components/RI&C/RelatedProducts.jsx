import React, {useState, useEffect, useRef} from 'react';
import RLCard from './RLCard.jsx';
import {getRelatedProducts} from './../../../fetch.jsx';
import _ from 'underscore';
import $ from 'jquery';
import {Promise} from "bluebird";

const RelatedProducts = ({product_id, productInfo, setProductId, setCanAddOutfit}) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [scrollRight, setScrollRight] = useState(true);
  const [scrollLeft, setScrollLeft] = useState(false);
  const currentList = useRef([]);


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
      if ($(element).position().left < 0 && $($('.rl_card')[index + 1]).position().left >= 0) {
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
        (setRelatedProducts(_.uniq(result.data)));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product_id]);

  useEffect(() => {
    if (relatedProducts.length === 0) {
      setScrollRight(false);
    } else if (relatedProducts.length > 0 && $($('.rl_card')[relatedProducts.length - 1]).position().left + $($('.rl_card')[relatedProducts.length - 1]).width() < $('#rl_list').width()) {
      setScrollRight(false);
    } else {
      setScrollRight(true);
    }
  }, [relatedProducts]);

  const handleResize = () => {
    var cards = $('.rl_card');
    var firstCard = $($('.rl_card')[0]);
    for (var i = 0; i < cards.length; i++) {
      if ($(cards[i]).position().left + $(cards[i]).width() > $('#rl_list').width()) {
        setScrollRight(true);
      } else {
        setScrollRight(false);
      }
    }
    if (firstCard.position().left >= 0) {
      setScrollLeft(false);
    }
  };

  var addScrollRighOnResize;
  window.onresize = function() {
    clearTimeout(addScrollRighOnResize);
    addScrollRighOnResize = setTimeout(handleResize, 100);
  };

  return (
    <div id='rl_list' className='related_products_container'>
      {scrollLeft ? <button className='scroll_left_button' onClick={handleScrollLeft}>{'<'}</button> : null}
      {_.map(relatedProducts, (productID, index) => {
        return <RLCard key={productID} productInfo={productInfo} overview_product_id={product_id} product_id={productID} setProductId={setProductId} setCanAddOutfit={setCanAddOutfit}/>;
      })}
      {scrollRight ? <button className='scroll_right_button' onClick={handleScrollRight}>{'>'}</button> : null}
    </div>
  );
};

export default RelatedProducts;