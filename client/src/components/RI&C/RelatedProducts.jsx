import React, {useState, useEffect} from 'react';
import RLCard from './RLCard.jsx';
import {getRelatedProducts} from './../../../fetch.jsx';
import _ from 'underscore';
import { useScrollPercentage } from 'react-scroll-percentage';

const RelatedProducts = ({product_id}) => {

  const [relatedProducts, setRelatedProducts] = useState([]);

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
    <div className='related_products_container'>
      <button className='scroll_left_button'>Left</button>
      {_.map(relatedProducts, (productID) => {
        return <RLCard key={productID} product_id={productID}/>;
      })}
      <button className='scroll_right_button'>Right</button>
    </div>
  );
};

export default RelatedProducts;