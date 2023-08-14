const Review = ( { review, partFilled } ) => {
  console.log(review)
  const getDate = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const monthInd = newDate.getMonth();
    const day = newDate.getDate();

    const months = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];

    const month = months[monthInd];

    return month + day + ', ' + year;
  }

  return (
    <div id='rndtile'>
      <div id='rnd'>
        <div id='stars'>
          <div id='star-container'>
          <p id='revheaders'>{partFilled(review.rating)}</p>
          </div>
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
        <div>
          <p><b>Response: </b></p>
          <p>{review.response}</p>
        </div>
      ) : (<></>)
      }
      {review.photos.map((image) => {
        return (<img key={image.id} src={image.url}/>)
      })}
      <p id='revtxt'>Helpful? <u>Yes</u> ({review.helpfulness}) | <u>Report</u></p>
    </div>
  )
}

export default Review;