
import { render, screen } from '@testing-library/react';
import QA from './QA.jsx';

test('renders the QA section', () => {
  render(<QA />);
});

test('QA section with no question has title and add question button', async () => {
  const { container } = await render(<QA product_id={37323}/>);
  await expect(screen.queryAllByText('QUESTIONS & ANSWERS')).toHaveLength(1)
  await expect(screen.queryAllByText('Add Question')).toHaveLength(1)
});