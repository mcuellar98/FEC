import {  trianglePos, perc, partFilled, average, recPercent, revPerc, getDate } from './Helper';
import { render } from '@testing-library/react';

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