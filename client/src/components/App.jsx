import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RatingsReviews from './R&R/R&R.jsx';
import QA from './QA/QA.jsx';
import Overview from './Overview/Overview.jsx';
import RIC from './RI&C/RIC.jsx';
import HomePage from './HomePage/HomePage.jsx';
import {getProductById} from './../../fetch.jsx';

const App = () => {
  const [productId, setProductId] = useState(37355);
  const [clicked, setClicked] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const [productStyles, setProductStyles] = useState({});
  const [outfitImage, setOutfitImage] = useState('');
  const [productRating, setProductRating] = useState(0);

  useEffect(() => {
    if (productId !== 0) {
      getProductById(productId)
        .then((results) => {
          setProductInfo(results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [productId]);

  const goHome = (e) => {
    e.preventDefault();
    setClicked(false);
  };

  // const handleClick = (id) => {
  //   getProductById(id)
  //     .then((results) => {
  //       setProductInfo(results);
  //       setProductId(id);
  //       setClicked(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <div className='header'>
        <p onClick={goHome}><u style={{cursor: 'pointer', marginLeft: '20px', fontSize: '24px'}}>Atelier</u></p>
      </div>
      {!clicked ?
        (<div>
          <Overview id={productId} productInfo={productInfo} setOutfitImage={setOutfitImage}/>
          <RIC product_id={productId} productInfo={productInfo} setProductId={setProductId} outfitImage={outfitImage} productRating={productRating}/>
          <QA productInfo={productInfo}/>
          <RatingsReviews id={productId} setProductRating={setProductRating}/>
        </div>) : (<HomePage set={handleClick}/>)
      }
    </div>
  );
};

export default App;