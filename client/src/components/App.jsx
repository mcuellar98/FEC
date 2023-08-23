import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RatingsReviews from './R&R/R&R.jsx';
import getProducts from '../../fetch.jsx';
import QA from './QA/QA.jsx';
import Overview from './Overview/Overview.jsx';
import RIC from './RI&C/RIC.jsx';

const App = () => {

  const [productId, setProductId] = useState(37318);
  const [outfitImage, setOutfitImage] = useState('');
  const [outfitInfo, setOutfitInfo] = useState();
  const [productRating, setProductRating] = useState(0);

  return (
    <div>
      <Overview setOutfitImage={setOutfitImage} setOutfitInfo={setOutfitInfo}/>
      <RIC product_id={productId} setProductId={setProductId} outfitInfo={outfitInfo} outfitImage={outfitImage} productRating={productRating}/>
      <QA product_id={productId}/>
      <RatingsReviews id={productId} setProductRating={setProductRating}/>
    </div>
  );
};

export default App;