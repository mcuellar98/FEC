const Review = ( { review } ) => {

  return (
    <div id='tile'>
      <div id='rnd'>
        <span>Rating: {review.rating}</span> <span>{review.reviewer_name}</span>
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