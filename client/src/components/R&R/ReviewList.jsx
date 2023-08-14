import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import { getReviewsById,getMetaReviews,postReview } from '../../../fetch.jsx';

const ReviewList = ( {id,reviews} ) => {

  return (
    <div>
      {reviews.map((review) => {
        return (<Review key={review.review_id} review={review}/>)
      })}
    </div>
  )
};

export default ReviewList;
