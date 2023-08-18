import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import Review_Modal from './Review_Modal.jsx'
import { getReviewsById,getMetaReviews,postReview } from '../../../fetch.jsx';

const ReviewList = ( {id,reviews,view,sV,meta} ) => {
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
  const handleModal = (e) => {
    e.preventDefault();
    sV(true);
  }
  const handleExit = (e) => {
    e.preventDefault();
    sV(false);
  }

  return (
    <div id='rlistMap'>
      {(reviews.length === 0) ? (<div>No Reviews Yet...</div>) : list.map((review) => {
        return (<Review key={review.review_id} review={review} partFilled={partFilled}/>)
      })}
      <div id='rbutton-cont'>
        {(len <= reviews.length && reviews.length > 2) ?
          (<button onClick={handleClick}>MORE REVIEWS</button>) :
          (reviews.length < 2) ? (<></>) :
          (<button onClick={handleCollapse}>COLLAPSE REVIEWS</button>)
        }
        <button onClick={handleModal}>ADD A REVIEW   <span style={{fontSize:'18px'}}>+</span></button>
        {
          view ? (
            <div>
              <Review_Modal view={view} sV={sV} meta={meta}/>
              <div onClick={handleExit} className='blur'></div>
            </div>) : <></>
        }
      </div>
    </div>
  )
};

export default ReviewList;
