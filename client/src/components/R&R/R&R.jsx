import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getReviewsById,getMetaReviews,postReview } from '../../../fetch.jsx';
import ReviewList from './ReviewList.jsx';
import Sorter from './Sorter.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const RatingsReviews = (props) => {
  const [ data,setData ] = useState([]);
  const [ meta,setMeta ] = useState([]);
  const [ dataCopy,setDC ] = useState(data);

  useEffect(() => {
    get(props.id);
    getMeta(props.id);
  },[])

//#region fetch stuff
  var get = (prodID) => {
    getReviewsById(prodID)
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
      fontSize: '14px',
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

  useEffect(() => {
    setDC(data);
  }, [data]);

  const sorting = (option) => {
    if (option === 'Relevance') {
      setData(prevData => {
        const sorted = [...prevData];
        sorted.sort((a,b) => {
          if (Math.abs(b.helpfulness - a.helpfulness) <= 2) {
            return new Date(b.date) - new Date(a.date)
          } else {
            return b.helpfulness - a.helpfulness
            }
          });
        return sorted;
      });
      setDC(prevData => {
        const sorted = [...prevData];
        sorted.sort((a,b) => {
          if (Math.abs(b.helpfulness - a.helpfulness) <= 2) {
            return new Date(b.date) - new Date(a.date)
          } else {
            return b.helpfulness - a.helpfulness
            }
          });
        return sorted;
      });
    } else if ( option === 'Newest') {
      setData(prevData => {
        const sorted = [...prevData];
        sorted.sort((a,b) => new Date(b.date) - new Date(a.date));
        return sorted;
      });
      setDC(prevData => {
        const sorted = [...prevData];
        sorted.sort((a,b) => new Date(b.date) - new Date(a.date));
        return sorted;
      });
    } else if (option === 'Helpful') {
      setData(prevData => {
        const sorted = [...prevData]; // Creating a new array reference
        sorted.sort((a,b) => {return b.helpfulness - a.helpfulness});
        return sorted;
      });
      setDC(prevData => {
        const sorted = [...prevData]; // Creating a new array reference
        sorted.sort((a,b) => {return b.helpfulness - a.helpfulness});
        return sorted;
      });
    }
  }
  const filtering = (rating) => {
    const filtered = data.filter((review) => {
      review.rating === rating
    });
    setDC(filtered);
  }

  return (
    <div>
      <div id='rnrTitleCont'>
        <h2 id='rnrTitle'>Ratings And Reviews</h2>
      </div>
      <div id='RnR-par'>
        <div id='RnR'>
          <div id='ratings'>
            <RatingBreakdown id={props.id} reviews={meta} partFilled={partFilled} filtering={filtering} />
            <ProductBreakdown id={props.id} meta={meta}/>
          </div>
          <div id='space-between'></div>
          <div id='reviews-sec'>
            <div id='reviews'>
              <Sorter id={props.id} reviews={data} sorting={sorting}/>
              <ReviewList id={props.id} reviews={dataCopy} partFilled={partFilled} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatingsReviews;