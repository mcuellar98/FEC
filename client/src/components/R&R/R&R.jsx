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
    const percent = 100 * part;
    var styles = {
      color: 'transparent',
      WebkitBackgroundClip: 'text',
      fontSize: '16px',
      WebkitTextStroke: '0.7px white',
    }
    if (percent % 10 === 0) {
      styles.backgroundImage = `linear-gradient(to right, white ${percent}%, transparent ${percent}%, transparent 100%)`;
    } else if ((percent - 5) % 20 === 0) {
      const temp = percent + 2.5;
      styles.backgroundImage = `linear-gradient(to right, white ${temp}%, transparent ${temp}%, transparent 100%)`;
    } else {
      const temp = percent - 2.5;
      styles.backgroundImage = `linear-gradient(to right, white ${temp}%, transparent ${temp}%, transparent 100%)`;
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