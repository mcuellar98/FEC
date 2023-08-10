import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import getProducts from '../../fetch.jsx';
import QA from './QA/QA.jsx';

const App = () => {
  return (
    <div>
      Bye World
      <QA/>
    </div>
  );
};

export default App;