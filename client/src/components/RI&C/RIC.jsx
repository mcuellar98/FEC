import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

const RIC = ({product_id}) => {
  return (
    <div className='RIC'>
      <RelatedProducts product_id={product_id}/>
      <YourOutfit/>
    </div>
  );
};

export default RIC;