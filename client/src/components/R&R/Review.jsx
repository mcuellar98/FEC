const Review = ( { review } ) => {
  console.log(review.rating)

  const stars = (rating) => {
    const filled = Math.floor(rating);
    const part = Math.round(10 * (3.6 % 1)) / 10;
  }

  return (
    <div id='tile'>
      <div id='rnd'>
        <div id='stars'>
          <div id='stars-filled'>
          <span>★{stars(review.rating)}</span>
          </div>
          <span>☆</span>
        </div>
        <span>{review.reviewer_name}</span>
      </div>
      <p><b>{review.summary}</b></p>
      <p>{review.body}</p>
      {review.response ? (
        <div>
          <p><b>Response: </b></p>
          <p>{review.response}</p>
        </div>
      ) : (<></>)
      }
      <p>Helpful? <u>Yes</u> | <u>Report</u></p>
    </div>
  )
}

export default Review;