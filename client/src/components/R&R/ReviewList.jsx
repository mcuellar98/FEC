import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import { getReviewsById,getMetaReviews,postReview } from '../../../fetch.jsx';

const ReviewList = ( {id,reviews} ) => {
  const [ data,setData ] = useState([])

  useEffect(() => {
    get(id);
  },[])

  var get = (prodID) => {
    getReviewsById(prodID)
      .then((res) => {
        setData(res.data.results)
      })
  }

  return (
    <div>
      {data.map((review) => {
        return (<Review key={review.review_id} review={review}/>)
      })}
    </div>
  )
};

export default ReviewList;
