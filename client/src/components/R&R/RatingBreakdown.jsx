import React, { useState, useEffect } from 'react';

const RatingBreakdown = (props) => {
  const [ avg,setAvg ] = useState(0);
  const [ recPer,setRP] = useState(0);

  const average = (reviews) => {
    var sum = 0;
    var len = 0;
    for (var rating in reviews.ratings) {
      len += Number(reviews.ratings[rating])
      sum += Number(rating) * Number(reviews.ratings[rating])
    }
    return Math.round(10 * (sum / len )) / 10;
  }
  const recPercent = (reviews) => {
    var total;
    if (reviews.recommended) {
      var trues = Number(reviews.recommended[true])
      var falses = Number(reviews.recommended[false])
      total = trues + falses
    }
    return Math.round((trues / total) * 100);
  }

  const revPerc = (reviews, rating) => {
    if (reviews.ratings) {
      var perc = Number(reviews.ratings[rating]);
      var len = 0;
      for (var rating in reviews.ratings) {
        len += Number(reviews.ratings[rating]);
      }
      return Math.round((perc / len) * 100);
    }
    return;
  }

  const bar = (percent,rating) => {
    const styles = {
      margin: '0 6px 0 10px',
      background: `linear-gradient(to right, rgb(51,255,51) ${percent}%, rgb(96,96,96) ${percent}%, rgb(70,70,70) 100%`,
      width: '65%',
      height: '6px',
    }
    return <div id='rateBar' onClick={(e) => {handleClick(e,rating)}} style={styles}></div>
  }

  useEffect(() => {
    setAvg(average(props.reviews));
    setRP(recPercent(props.reviews))
  },[props.reviews]);

  const handleClick = (e,value) => {
    e.preventDefault();
    props.filtering(value);
  }
  return (
    <div>
      <div id='ratingBreakdown'>
        <p id='ravg'><b>{`${avg}`}</b></p>
        <div style={{width: '10px', height: '1px'}}></div>
        <div id='stars'><span>{props.partFilled(avg)}</span></div>
      </div>
      <p id='recPer'>{recPer}% of reviews recommend this product</p>
      <div id='rbdown'>
        <p id='revtxt' onClick={(e) => {handleClick(e,5)}}><u>5 star</u></p>
        {bar(revPerc(props.reviews, '5'), 5)}
        <p id='revtxt' onClick={(e) => {handleClick(e,5)}}>{revPerc(props.reviews, '5')}%</p>
      </div>
      <div id='rbdown'>
        <p id='revtxt' onClick={(e) => {handleClick(e,4)}}><u>4 star</u></p>
        {bar(revPerc(props.reviews, '4'), 4)}
        <p id='revtxt' onClick={(e) => {handleClick(e,4)}}>{revPerc(props.reviews, '4')}%</p>
      </div>
      <div id='rbdown'>
        <p id='revtxt' onClick={(e) => {handleClick(e,3)}}><u>3 star</u></p>
        {bar(revPerc(props.reviews, '3'), 3)}
        <p id='revtxt' onClick={(e) => {handleClick(e,3)}}>{revPerc(props.reviews, '3')}%</p>
      </div>
      <div id='rbdown'>
        <p id='revtxt' onClick={(e) => {handleClick(e,2)}}><u>2 star</u></p>
        {bar(revPerc(props.reviews, '2'), 2)}
        <p id='revtxt' onClick={(e) => {handleClick(e,2)}}>{revPerc(props.reviews, '2')}%</p>
      </div>
      <div id='rbdown'>
        <p id='revtxt' onClick={(e) => {handleClick(e,1)}}><u>1 star</u></p>
        {bar(revPerc(props.reviews, '1'), 1)}
        <p id='revtxt' onClick={(e) => {handleClick(e,1)}}>{revPerc(props.reviews, '1')}%</p>
      </div>
      <div></div>
    </div>
  )
}

export default RatingBreakdown