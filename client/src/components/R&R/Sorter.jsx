import { useState, useEffect } from 'react';
import { getReviewsById,getMetaReviews,postReview } from '../../../fetch.jsx';

const Sorter = (props) => {
  const [ revNum, setrevNum ] = useState(props.reviews.length);

  useEffect(()=> {
    const sortOption = document.getElementById('sorting');
    setrevNum(props.reviews.length)
    props.sorting(sortOption.value)
  },[props.reviews]);

  var handleChange = (e) => {
    e.preventDefault();
    const sortOption = document.getElementById('sorting');
    props.sorting(sortOption.value); //changing option value for select element (relevance by default)
  }

  return (
    <div className='sorter'>
      <span>{revNum} reviews, sorted by</span>
      <select id='sorting' onChange={handleChange}>
        <option value='Relevance'>Relevance</option>
        <option value='Newest'>Newest</option>
        <option value='Helpful'>Helpful</option>
      </select>
    </div>
  )
}

export default Sorter;