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
  const [ data,setData ] = useState([])

  useEffect(() => {
    get(props.id);
  },[])

//#region fetch stuff
  var get = (prodID) => {
    getReviewsById(prodID)
      .then((res) => {
        setData(res.data.results)
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
//#endregion

  //#region stars

  //refactor to have % of stars in one function
  //.05,0.1,.15 -> 5
  const partFilled = (rating) => {
    const part = Math.round(20 * (rating / 5)) / 20;
    console.log(part);
    var styles = {
      color: 'transparent',
      WebkitBackgroundClip: 'text',
      fontSize: '16px',
      WebkitTextStroke: '0.7px white',
    }
    if (part === 0.05) {
      styles.backgroundImage = 'linear-gradient(to right, white 7.5%, transparent 7.5%, transparent 100%)';
    } else if (part === 0.1) {
      styles.backgroundImage = 'linear-gradient(to right, white 10%, transparent 10%, transparent 100%)';
    } else if (part === 0.15) {
      styles.backgroundImage = 'linear-gradient(to right, white 12.5%, transparent 12.5%, transparent 100%)';
    } else if (part === 0.2) {
      styles.backgroundImage = 'linear-gradient(to right, white 20%, transparent 20%, transparent 100%)';
    } else if (part === 0.25) {
      styles.backgroundImage = 'linear-gradient(to right, white 27.5%, transparent 27.5%, transparent 100%)';
    } else if (part === 0.3) {
      styles.backgroundImage = 'linear-gradient(to right, white 30%, transparent 30%, transparent 100%)';
    } else if (part === 0.35) {
      styles.backgroundImage = 'linear-gradient(to right, white 32.5%, transparent 32.5%, transparent 100%)';
    } else if (part === 0.4) {
      styles.backgroundImage = 'linear-gradient(to right, white 40%, transparent 40%, transparent 100%)';
    } else if (part === 0.45) {
      styles.backgroundImage = 'linear-gradient(to right, white 47.5%, transparent 47.5%, transparent 100%)';
    } else if (part === 0.5) {
      styles.backgroundImage = 'linear-gradient(to right, white 50%, transparent 50%, transparent 100%)';
    } else if (part === 0.55) {
      styles.backgroundImage = 'linear-gradient(to right, white 52.5%, transparent 52.5%, transparent 100%)';
    } else if (part === 0.6) {
      styles.backgroundImage = 'linear-gradient(to right, white 60%, transparent 60%, transparent 100%)';
    } else if (part === 0.65) {
      styles.backgroundImage = 'linear-gradient(to right, white 67.5%, transparent 67.5%, transparent 100%)';
    } else if (part === 0.7) {
      styles.backgroundImage = 'linear-gradient(to right, white 70%, transparent 70%, transparent 100%)';
    } else if (part === 0.75) {
      styles.backgroundImage = 'linear-gradient(to right, white 72.5%, transparent 72.5%, transparent 100%)';
    } else if (part === 0.8) {
      styles.backgroundImage = 'linear-gradient(to right, white 80%, transparent 80%, transparent 100%)';
    } else if (part === 0.85) {
      styles.backgroundImage = 'linear-gradient(to right, white 87.5%, transparent 87.5%, transparent 100%)';
    } else if (part === 0.9) {
      styles.backgroundImage = 'linear-gradient(to right, white 90%, transparent 90%, transparent 100%)';
    } else if (part === 0.95) {
      styles.backgroundImage = 'linear-gradient(to right, white 92.5%, transparent 92.5%, transparent 100%)';
    } else if (part === 1) {
      styles.backgroundImage = 'linear-gradient(to right, white 100%, transparent 100%, transparent 100%)';
    }
    return (<span id='partFilled' style={styles} >★★★★★</span>);
  }

  //#endregion

  return (
    <div>
      <h1>Ratings And Reviews</h1>
      <div id='RnR-par'>
        <div id='RnR'>
          <div id='ratings'>
            <RatingBreakdown id={props.id} reviews={data} partFilled={partFilled} />
            <ProductBreakdown id={props.id}/>
          </div>
          <div id='space-between'></div>
          <div id='reviews-sec'>
            <div id='reviews'>
              <Sorter id={props.id} reviews={data}/>
              <ReviewList id={props.id} reviews={data} partFilled={partFilled} />
            </div>
            <div id='add-more-container'>
              <MoreReviews id={props.id}/>
              <AddReview id={props.id}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatingsReviews;