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
      <h1>Ratings And Reviews</h1>
      <div id='RnR'>
        <div id='ratings'>
          <RatingBreakdown id={props.id}/>
          <ProductBreakdown id={props.id}/>
        </div>
        <div id='reviews-sec'>
          <div id='reviews'>
            <Sorter id={props.id}/>
            <ReviewList id={props.id}/>
          </div>
          <div id='add-more-container'>
            <MoreReviews id={props.id}/>
            <AddReview id={props.id}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatingsReviews;