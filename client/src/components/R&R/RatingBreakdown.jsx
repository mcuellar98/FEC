import React, { useState, useEffect } from 'react';

const RatingBreakdown = (props) => {
  const [ avg,setAvg ] = useState(0);
  const [ recPer,setRP] = useState(0);

  const average = (reviews) => {
    var sum = 0;
    for (var i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating;
    }
    return Math.floor(10 * (sum / reviews.length)) / 10;
  }
  const recPercent = (reviews) => {
    var count = 0;
    for (var i = 0; i < reviews.length; i++) {
      if (reviews[i].recommend) {
        count += 1;
      }
    }
    return (count / reviews.length) * 100
  }

  const revPerc = (reviews, rating) => {
    var perc = 0;
    for (var i = 0; i < reviews.length; i++) {
      if (reviews[i].rating === rating) {
        perc += 1;
      }
    }
    return Math.floor((perc / reviews.length) * 100)
  }

  const bar = (percent) => {
    const styles = {
      margin: '0 6px 0 10px',
      background: `linear-gradient(to right, rgb(51,255,51) ${percent}%, rgb(96,96,96) ${percent}%, rgb(70,70,70) 100%`,
      width: '65%',
      height: '6px',
    }
    return <div style={styles}></div>
  }

  useEffect(() => {
    setAvg(average(props.reviews));
    setRP(recPercent(props.reviews))
  },[props.reviews]);

  return (
    <div>
      <div id='ratingBreakdown'>
        <p id='ravg'><b>{`${avg}`}</b></p>
        <div style={{width: '10px', height: '1px'}}></div>
        <div id='stars'><span>{props.partFilled(avg)}</span></div>
      </div>
      <p id='recPer'>{recPer}% of reviews recommend this product</p>
      <div id='rbdown'>
        <p id='revtxt'><u>5 star</u></p>
        {bar(revPerc(props.reviews, 5))}
        <p id='revtxt'>{revPerc(props.reviews, 5)}%</p>
      </div>
      <div id='rbdown'>
        <p id='revtxt'><u>4 star</u></p>
        {bar(revPerc(props.reviews, 4))}
        <p id='revtxt'>{revPerc(props.reviews, 4)}%</p>
      </div>
      <div id='rbdown'>
        <p id='revtxt'><u>3 star</u></p>
        {bar(revPerc(props.reviews, 3))}
        <p id='revtxt'>{revPerc(props.reviews, 3)}%</p>
      </div>
      <div id='rbdown'>
        <p id='revtxt'><u>2 star</u></p>
        {bar(revPerc(props.reviews, 2))}
        <p id='revtxt'>{revPerc(props.reviews, 2)}%</p>
      </div>
      <div id='rbdown'>
        <p id='revtxt'><u>1 star</u></p>
        {bar(revPerc(props.reviews, 1))}
        <p id='revtxt'>{revPerc(props.reviews, 1)}%</p>
      </div>
      <div></div>
    </div>
  )
}

export default RatingBreakdown