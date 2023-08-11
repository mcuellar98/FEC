import { useState, useEffect } from 'react';

const Sorter = (props) => {

  useEffect(()=> {
    const sortOption = document.getElementById('sorting');
    console.log(sortOption.value);
  },[]);

  var handleChange = (e) => {
    e.preventDefault();
    const sortOption = document.getElementById('sorting');
    console.log(sortOption.value); //changing option value for select element (relevance by default)
  }

  return (
    <div className='sorter'>
      <span>X reviews, sorted by</span>
      <select id='sorting' onChange={handleChange}>
        <option value='Relevance'>Relevance</option>
        <option value='Newest'>Newest</option>
        <option value='Helpful'>Helpful</option>
      </select>
    </div>
  )
}

export default Sorter;