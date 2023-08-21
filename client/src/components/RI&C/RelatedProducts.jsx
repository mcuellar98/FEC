import React, {useState, useEffect} from 'react';
import RLCard from './RLCard.jsx';
import {getRelatedProducts} from './../../../fetch.jsx';
import _ from 'underscore';

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
  });

  return (
    <ul className='rl_ul'>
      {_.map(relatedProducts, (productID) => {
        return <RLCard key={productID} product_id={productID}/>;
      })}
    </ul>
  );
};

export default RelatedProducts;