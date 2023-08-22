import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RatingsReviews from './R&R/R&R.jsx';
import getProducts from '../../fetch.jsx';
import QA from './QA/QA.jsx';
import Overview from './Overview/Overview.jsx';
import HomePage from './HomePage/HomePage.jsx';

const App = () => {
  const [ productId, setProductId ] = useState(37323);
  const [ pageNum,setPageN ] = useState(1);
  const [ clicked,setClicked ] = useState(false);

  const goHome = (e) => {
    e.preventDefault();
    setClicked(false);
  }
  const handleClick = (id) => {
    setClicked(true);
    setProductId(id)
  }

  return (
    <div>
      <div className='header'>
        <p onClick={goHome}><u style={{cursor:'pointer',marginLeft: '20px'}}>Atelier</u></p>
      </div>
      {clicked ?
      (<div><Overview />
      <QA product_id={productId}/>
      <RatingsReviews id={productId}/></div>) :
      (<HomePage pageNum={pageNum} set={handleClick}/>)
      }
    </div>
  );
};

export default App;