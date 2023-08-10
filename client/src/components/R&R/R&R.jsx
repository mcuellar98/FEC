import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getReviewsById,getMetaReviews,postReview } from '../../../fetch.jsx';
import ReviewList from './ReviewList.jsx';
import Sorter from './Sorter.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import MoreReviews from './MoreReviews.jsx';
import AddReview from './AddReview.jsx'

const RatingsReviews = (id) => {
  const [ data,setData ] = useState([])

  var get = (prodID) => {
    getReviewsById(prodID)
      .then((resp) => {
        setData(resp.data);
      }) .catch((err) => {
        console.log(err)
      })
  }
  var getMeta = (prodID) => {
    getMetaReviews(prodID)
      .then((resp) => {
        setData(resp.data);
      }) .catch((err) => {
        console.log(err)
      })
  }
  var post = (prodID,review) => {
    postReview(prodID)
      .then((resp) => {
        setData(resp.data);
      }) .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      FINALLY GETTING STARTED
      <div>
        <Sorter id={id}/>
        <ReviewList id={id}/>
      </div>
      <div>
        <RatingBreakdown id={id}/>
        <ProductBreakdown id={id}/>
      </div>
      <div>
        <MoreReviews id={id}/>
        <AddReview id={id}/>
      </div>
    </div>
  )
}

export default RatingsReviews;