const trianglePos = (percent) => {
  const styles = {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '10px solid rgb(240,240,240)',
  }
  styles.left = `calc(${percent}% - 6px)`;
  return (<div style={styles}></div>)
}
const perc = (review) => {
  return Math.round((review.value / 5) * 100);
}

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

const getDate = (date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const monthInd = newDate.getMonth();
  const day = newDate.getDate();

  const months = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];

  const month = months[monthInd];

  return month + day + ', ' + year;
}

export {
  trianglePos,
  perc,
  partFilled,
  average,
  recPercent,
  revPerc,
  bar,
  getDate
}