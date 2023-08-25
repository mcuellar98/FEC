import React, {useState} from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfits from './YourOutfits.jsx';

const RIC = ({product_id, setProductId, outfitImage, outfitInfo, setOutfitImage, productRating}) => {

  const [canAddOutfit, setCanAddOutfit] = useState(true);

  return (
    <div className='RIC'>
      <p>RELATED PRODUCTS</p>
      <RelatedProducts product_id={product_id} setProductId={setProductId} setCanAddOutfit={setCanAddOutfit}/>
      <p>YOUR OUTFITS</p>
      <YourOutfits outfitImage={outfitImage} outfitInfo={outfitInfo} productRating={productRating} canAddOutfit={canAddOutfit} setCanAddOutfit={setCanAddOutfit} product_id={product_id}/>
    </div>
  );
};

export default RIC;