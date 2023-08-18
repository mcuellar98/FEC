import { useState, useEffect } from 'react';
import { helpfulReview,reportReview } from '../../../fetch.jsx';
import { partFilled,getDate } from './Helper.jsx'

const Review = ( { review } ) => {
  const [ helpful,setHelpful ] = useState(false);
  const [ report,setReport ] = useState(false);
  const [ helpCount, setHC ] = useState(review.helpfulness)

  const handleRep = (e) => {
    e.preventDefault();
    if (!report) {
      reportReview(review.review_id)
        .then(() => {
          setReport(true);
        })
    }
  }
  const handleHelp = (e) => {
    if (!helpful) {
      helpfulReview(review.review_id)
        .then(()=> {
          setHC(review.helpfulness + 1)
          setHelpful(true);
        })
    }
    e.preventDefault();
  }

  return (
    <div id='rndtile'>
      <div id='rnd'>
        <div id='stars'>
          <p id='revheaders'>{partFilled(review.rating)}</p>
        </div>
        <span id='revtxt'>{review.reviewer_name}, {getDate(review.date)}</span>
      </div>
      <p><b id='revheaders'>{review.summary}</b></p>
      <p id='revtxt'>{review.body}</p>
      {review.recommend ? (
        <div id='revtxt'>
          <p>✓ I recommend this product</p>
        </div>
      ) : (<></>)
      }
      {review.response ? (
        <div id='revResp'>
          <p><b>Response: </b></p>
          <p>{review.response}</p>
        </div>
      ) : (<></>)
      }
      {review.photos.map((image) => {
        return (<img key={image.id} style={{width:'auto',height:'100px'}} src={image.url}/>)
      })}
      <p id='revtxt'>Helpful? <u id='helpful' onClick={handleHelp} value={helpful}>Yes</u> ({helpCount}) | <u id='report' onClick={handleRep} value={report}>{report ? (<u>Reported</u>) : (<u>Report</u>)}</u></p>
    </div>
  )
}

export default Review;