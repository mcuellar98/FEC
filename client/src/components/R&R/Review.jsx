const Review = ( { review } ) => {
  console.log(review.rating)

  const filledStars = (rating) => {
    const filled = Math.floor(rating);
    var result = '';
    for (var i = 0; i < filled; i++) {
      result += '★'
    }
    return (<span id='filled'>{result}</span>)
  }
  const partFilled = (rating) => {
    if (rating % 1 !== 0) {
      const part = Math.round(10 * (3.6 % 1)) / 10;
      const roundPart = Math.round(part * 4) / 4;
      var result = '★';
      const el = document.getElementById('partFilled');
      if (roundPart === 0.25) {
        el.style.background = 'linear-gradient(to right, white 25%, transparent 25%, transparent 100%)';
      } else if (roundPart === 0.5) {
        el.style.background = 'linear-gradient(to right, white 50%, transparent 25%, transparent 100%)';
      } else if (roundPart === 0.75) {
        el.style.background = 'linear-gradient(to right, white 75%, transparent 25%, transparent 100%)';
      }
      return result;
    } else {
      return;
    }
  }

  const empty = (rating) => {
    var result = ''
    for (var i = 0; i < (5 - Math.ceil(rating)); i++) {
      result += '☆';
    }
    return (<span>{result}</span>)
  }
  return (
    <div id='tile'>
      <div id='rnd'>
        <div id='stars'>
          <span>{filledStars(review.rating)}<span id='partFilled'>{partFilled(review.rating)}</span>{empty(review.rating)}</span>
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