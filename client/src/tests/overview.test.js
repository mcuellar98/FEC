import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ProductInfo, { getRating } from '../components/Overview/ProductInfo.jsx';
import Overview from '../components/Overview/Overview.jsx';
import { average } from '../components/R&R/Helper.jsx';

describe('Overview', () => {
  it('Overview Renders', () => {
    render(<Overview id={1} setOutfitImage={()=>{}} setOutfitInfo={()=>{}}/>);

  });
});

describe('getRating', () => {
  it('calculates average rating correctly', async () => {



  });

  it('handles error gracefully', async () => {
    //jest.spyOn(global, 'getMetaReviews').mockRejectedValue(new Error('Failed to fetch'));

    // You can use try-catch or async/await with .rejects to test error cases
    //await expect(getMRating('123')).rejects.toThrow('Failed to fetch');
  });
});