import React, { useState, useEffect } from 'react';

const RatingBreakdown = (props) => {
  const [ avg,setAvg ] = useState(0);

  const average = (reviews) => {
    var sum = 0;
    for (var i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating;
    }
    return Math.floor(10 * (sum / reviews.length)) / 10;
  }

  useEffect(() => {
    setAvg(average(props.reviews));
  },[props.reviews]);

  return (
    <div>
      Rating Breakdown {avg}
      <div id='stars'>
          <span>{props.partFilled(avg)}</span>
        </div>
    </div>
  )
}

export default RatingBreakdown