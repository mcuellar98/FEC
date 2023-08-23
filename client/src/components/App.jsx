import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RatingsReviews from './R&R/R&R.jsx';
import getProducts from '../../fetch.jsx';
import QA from './QA/QA.jsx';
import Overview from './Overview/Overview.jsx';
import RIC from './RI&C/RIC.jsx';

const App = () => {

  const [productId, setProductId] = useState(37325);

  return (
    <div>
      <Overview />
      <RIC product_id={productId} setProductId={setProductId}/>
      <QA product_id={productId}/>
      <RatingsReviews id={productId}/>
    </div>
  );
};

export default App;