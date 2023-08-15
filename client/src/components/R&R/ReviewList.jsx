import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import { getReviewsById,getMetaReviews,postReview } from '../../../fetch.jsx';

const ReviewList = ( {id,reviews,partFilled} ) => {
  const [ list,setList ] = useState([]);
  const [ len,setLen ] = useState(2);

  useEffect(() => {
    if (reviews.length > 0) {
      var arr = [];
      for (var i = 0; i < len; i++) {
        if (reviews[i]) {
          arr.push(reviews[i]);
        } else {
          break;
        }
      }
      setList(arr)
    }
  },[reviews,len]);

  const handleClick = (e) => {
    e.preventDefault();
    setLen(len + 2);
  }

  const handleCollapse = (e) => {
    e.preventDefault();
    setLen(2);
  }

  return (
    <div>
      {list.map((review) => {
        return (<Review key={review.review_id} review={review} partFilled={partFilled}/>)
      })}
      <div>
        {(len <= reviews.length) ?
          (<button onClick={handleClick}>MORE REVIEWS</button>) :
          (<button onClick={handleCollapse}>COLLAPSE REVIEWS</button>)
        }
      </div>
    </div>
  )
};

export default ReviewList;
