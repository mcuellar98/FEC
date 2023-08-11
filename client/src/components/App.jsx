import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RatingsReviews from './R&R/R&R.jsx';
import getProducts from '../../fetch.jsx';
import QA from './QA/QA.jsx';
import Overview from './Overview/Overview.jsx';

const App = () => {
  var id = 37312;
  return (
    <div>
      Hello World
      <Overview />
      <QA/>
      <RatingsReviews id={id}/>
    </div>
  );
};

export default App;