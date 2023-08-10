import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RatingsReviews from './R&R/R&R.jsx'
import getProducts from '../../fetch.jsx';
import Overview from './Overview/Overview.jsx';

const App = () => {
  return (
    <div>
      <RatingsReviews />
      <div>
        <Overview />
      </div>
      Hello World
    </div>
  );
};

export default App;