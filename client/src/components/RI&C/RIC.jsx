import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfits from './YourOutfits.jsx';

const RIC = ({product_id, setProductId, outfitImage, outfitInfo, setOutfitImage, productRating}) => {
  return (
    <div className='RIC'>
      <p>RELATED PRODUCTS</p>
      <RelatedProducts product_id={product_id} setProductId={setProductId}/>
      <p>YOUR OUTFITS</p>
      <YourOutfits outfitImage={outfitImage} outfitInfo={outfitInfo} productRating={productRating}/>
    </div>
  );
};

export default RIC;