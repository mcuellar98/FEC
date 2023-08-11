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
import AddReview from './AddReview.jsx';

const RatingsReviews = (props) => {

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
        <Sorter id={props.id}/>
        <ReviewList id={props.id}/>
      </div>
      <div>
        <RatingBreakdown id={props.id}/>
        <ProductBreakdown id={props.id}/>
      </div>
      <div>
        <MoreReviews id={props.id}/>
        <AddReview id={props.id}/>
      </div>
    </div>
  )
}

export default RatingsReviews;