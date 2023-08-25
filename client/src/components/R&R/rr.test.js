import {  trianglePos, perc, partFilled, average, recPercent, revPerc, getDate } from './Helper';
import { render, screen, fireEvent } from '@testing-library/react';
import * as utils from './Review'
import AddImage from './AddImage';
import ProductBreakdown from './ProductBreakdown';
import RatingsReviews from './R&R';
import RatingBreakdown from './RatingBreakdown';
import Review_Modal from './Review_Modal';
import Review from './Review';
import ReviewList from './ReviewList';
import Sorter from './Sorter';

const meta = {
  "product_id": "37312",
  "ratings": {
      "1": "19",
      "2": "13",
      "3": "9",
      "4": "6",
      "5": "13"
  },
  "recommended": {
      "false": "11",
      "true": "49"
  },
  "characteristics": {
      "Quality": {
          "id": 125035,
          "value": "3.2068965517241379"
      }
  }
}
const data =
  {
      "review_id": 1280179,
      "rating": 5,
      "summary": "squidward test review",
      "recommend": true,
      "response": null,
      "body": "just a test haha",
      "date": "2023-06-26T00:00:00.000Z",
      "reviewer_name": "squid",
      "helpfulness": 48,
      "photos": [
          {
              "id": 2459023,
              "url": "https://static.wikia.nocookie.net/spongebob/images/9/96/The_Two_Faces_of_Squidward_174.png"
          },
          {
              "id": 2459024,
              "url": "https://static.wikia.nocookie.net/spongebob/images/4/4f/The_Two_Faces_of_Squidward_075.png"
          }
      ]
  }


describe('Helper functions', () => {
  test('should render triangle for rating percentage bar', () => {
    render(<span>{trianglePos(40)}</span>);
  });
  test('perc function should return the percent equivalent of a rating out of 5', () => {
    expect(perc({value:4.3})).toBe(86);
  });
  test('should render partly filled stars', () => {
    render(<span>{partFilled(3.5)}</span>);
  });
  test('should convert object of ratings to get the average of ratings', () => {
    expect(average({'ratings':{'1':15,'2':4,'3':69,'4':24,'5':9}})).toBe(3.1);
  })
  test('should find the percent of people who recommended the product on review', () => {
    expect(recPercent({'recommended':{true: 16,false:4}})).toBe(80);
  })
  test('should convert object of ratings to get the percent of each rating', () => {
    expect(revPerc({'ratings':{'1':15,'2':4,'3':69,'4':24,'5':9}}, 5)).toBe(7);
    expect(revPerc({'ratings':{'1':15,'2':4,'3':69,'4':24,'5':9}}, 4)).toBe(20);
    expect(revPerc({'ratings':{'1':15,'2':4,'3':69,'4':24,'5':9}}, 3)).toBe(57);
    expect(revPerc({'ratings':{'1':15,'2':4,'3':69,'4':24,'5':9}}, 2)).toBe(3);
    expect(revPerc({'ratings':{'1':15,'2':4,'3':69,'4':24,'5':9}}, 1)).toBe(12);
  })
  test('getDate should return a date in Month DD, YYYY format', () => {
    expect(getDate("Fri, 02 Feb 1996 03:04:05 GMT")).toBe("February 1, 1996");
  })
});

describe('AddImage tests', () => {
  test('Testing AddImage rendering', async () => {
    await render(<AddImage key='1' img={[]} id={37312} add={()=>{}} del={()=>{}}/>)
  })
});
describe('ProductBreakdown tests', () => {
  test('Testing PBreakdown rendering', async () => {
    await render(<ProductBreakdown id={37312} meta={meta}/>)
  })
});
describe('R&R tests', () => {
  test('Testing R&R rendering', async () => {
    await render(<RatingsReviews id={37312} setProductRating={() => {}}/>)
  })
});
describe('RatingBreakdown tests', () => {
  test('Testing RBreakdown rendering', async () => {
    await render(<RatingBreakdown id={37312} reviews={meta} filtering={()=>{}} setProductRating={()=>{}}/>)
  })
});
describe('Review_Modal tests', () => {
  test('Testing Modal rendering', async () => {
    await render(<Review_Modal view={false} id={37312} sV={()=>{}} meta={meta} refresh={()=>{}}/>)
  })
});
describe('Review tests', () => {
  test('Testing Review rendering', async () => {
    await render(<Review key='1' review={data}/>)
  })
});
describe('ReviewList tests', () => {
  test('Testing ReviewList rendering', async () => {
    await render(<ReviewList id={37312} reviews={data} view={false} sV={()=>{}} meta={meta} refresh={()=>{}}/>)
  })
});
describe('Sorter tests', () => {
  test('Testing Sorter rendering', async () => {
    await render(<Sorter id={37312} reviews={data} sorting={()=>{}}/>)
  });

  expect(screen.getByText(''))
});
