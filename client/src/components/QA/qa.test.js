
import { render, screen } from '@testing-library/react';
import ImageListEntry from "./ImageListEntry.jsx"
import AddAnswer from './AddAnswer.jsx'
import AddQuestion from "./AddQuestion.jsx"
import QA from "./QA.jsx"
import AnswerImageList from "./AnswerImageList.jsx"
import QAList from "./QAList.jsx"
import AnswerImageListEntry from "./AnswerImageListEntry.jsx"
import QAListEntry from "./QAListEntry.jsx"
import AnswerList from "./AnswerList.jsx"
import Search from "./Search.jsx"
import AnswerListEntry from "./AnswerListEntry.jsx"
import ImageList from "./ImageList.jsx"
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

Enzyme.configure({ adapter: new Adapter() })

test('renders the QA section', async () => {
  await render(<QA product_id={37325}/>);
});

test('Shallow renders the QA section', async () => {
  const wrapper = shallow(<QA product_id={37325}/>);
});

test('QA section with no question has title and add question button', async () => {
  const { container } = await render(<QA product_id={37323}/>);
  await expect(screen.queryAllByText('QUESTIONS & ANSWERS')).toHaveLength(1)
  await expect(screen.queryAllByText('Add Question')).toHaveLength(1)
});

test('Answer images render correctly', async () => {
  render(<ImageListEntry photo={'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'}/>)
})

test('Answer modal renders correctly', async () => {
  render(<AddAnswer product_id={37323} question_id={300462} question_body={'Expedita aut cumque aliquid reiciendis porro libero.'}/>)
})

test('Question modal renders correctly', async () => {
  render(<AddQuestion product_id={37323}/>)
})

test('Answer Image List renders correctly', async () => {
  await render(<AnswerImageList product_id={37323} answers={{
    "2803855": {
      "id": 2803855,
      "body": "Debitis aliquam sit quam eligendi voluptatum voluptates.",
      "date": "2021-06-21T00:00:00.000Z",
      "answerer_name": "Elmira_Ruecker7",
      "helpfulness": 10,
      "photos": [
          "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
      ]
  }}
  }/>)
})

test('Answer Images render correctly', async () => {
  await render(<AnswerImageListEntry product_id={37323} image={'blob:http://localhost:3000/724bd57e-3ff9-4c34-9532-1f58bf3049e5'} imageList={['blob:http://localhost:3000/724bd57e-3ff9-4c34-9532-1f58bf3049e5']}/>)
})

// test('QA list renders correctly', () => {
//   render(<QAList product_id={37323} questions={
//     {
//       "question_id": 300462,
//       "question_body": "Expedita aut cumque aliquid reiciendis porro libero.",
//       "question_date": "2021-06-28T00:00:00.000Z",
//       "asker_name": "Carson.Predovic64",
//       "question_helpfulness": 50,
//       "reported": false,
//       "answers": {[]}
//     }
//   }/>)
// })

// test('AnswerList renders correctly', async () => {
//   await render(<AnswerList product_id={37323} question_id={300462}/>)
// })

// test('Search renders correctly', async () => {
//   await render(<Search product_id={37323} qListSize={2}/>)
// })

test('ImageList renders correctly', async () => {
  render(<ImageList photos={['https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80']}/>)
})

test('AnswerListEntry renders correctly', async () => {
  await render(<AnswerImageListEntry product_id={37325} answer={
    {
      "id": 2803841,
      "body": "Beatae numquam placeat rerum culpa et excepturi.",
      "date": "2021-03-05T00:00:00.000Z",
      "answerer_name": "Benjamin.Stoltenberg",
      "helpfulness": 19,
      "photos": []
  }}/>)
})