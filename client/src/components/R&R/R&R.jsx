import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getReviewsById,getMetaReviews } from '../../../fetch.jsx';
import ReviewList from './ReviewList.jsx';
import Sorter from './Sorter.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const RatingsReviews = (props) => {
  const [ data,setData ] = useState([]);
  const [ meta,setMeta ] = useState([]);
  const [ dataCopy,setDC ] = useState(data);
  const [ viewModal,setVM ] = useState(false);

  useEffect(() => {
    get(props.id, 'relevance');
    getMeta(props.id);
  },[props.id])

//#region fetch stuff
  var get = (prodID, method) => {
    getReviewsById(prodID, method)
      .then((res) => {
        setData(res.data.results)
        setDC(res.data.results)
      })
  }
  var getMeta = (prodID) => {
    getMetaReviews(prodID)
      .then((resp) => {
        setMeta(resp.data);
      }) .catch((err) => {
        console.log(err)
      })
  }
//#endregion

  useEffect(() => {
    setDC(data);
  }, [data]);

  const sorting = (option) => {
    if (option === 'Relevance') {
      get(props.id, 'relevant');
    } else if ( option === 'Newest') {
      get(props.id, 'newest');
    } else if (option === 'Helpful') {
      get(props.id, 'helpful');
    }
  }
  const filtering = (rating) => {
    console.log(data)
    const filtered = data.filter((review) => {
      return review.rating === rating
    });
    console.log(filtered)
    setDC(filtered);
  }
  const refresh = () => {
    get(props.id, 'relevant')
  }
  return (
    <div>
      <div id='rnrTitleCont'>
        <h2 id='rnrTitle'>Ratings And Reviews</h2>
      </div>
      <div id='RnR-par'>
        <div id='RnR'>
          <div id='ratings'>
            <RatingBreakdown id={props.id} reviews={meta} filtering={filtering} setProductRating={props.setProductRating}/>
            <ProductBreakdown id={props.id} meta={meta}/>
          </div>
          <div id='space-between'></div>
          <div id='reviews-sec'>
            <div id='reviews'>
              <Sorter id={props.id} reviews={data} sorting={sorting}/>
              <ReviewList id={props.id} reviews={dataCopy} view={viewModal} sV={setVM} meta={meta} refresh={refresh}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatingsReviews;