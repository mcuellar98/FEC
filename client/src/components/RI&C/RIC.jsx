import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfits from './YourOutfits.jsx';

const RIC = ({product_id, setProductId, outfitImage, outfitInfo, setOutfitImage}) => {
  return (
    <div className='RIC'>
      <p>RELATED PRODUCTS</p>
      <RelatedProducts product_id={product_id} setProductId={setProductId}/>
      <p>YOUR OUTFITS</p>
      <YourOutfits outfitImage={outfitImage} outfitInfo={outfitInfo}/>
    </div>
  );
};

export default RIC;