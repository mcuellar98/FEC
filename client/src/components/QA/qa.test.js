
import { render, screen, cleanup, fireEvent} from '@testing-library/react';
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
import {mockProductInfo, mockAnswer, mockAnswers, mockQuestions, mockQuestion} from './MockData.js';

Enzyme.configure({ adapter: new Adapter() });


test('renders the QA section',  () => {
   render(<QA productInfo={mockProductInfo}/>);
});

test('Shallow renders the QA section', () => {
  const wrapper = shallow(<QA product_id={37325}/>);
});

test('QA section with no question has title and add question button',  () => {
  const { container } =  render(<QA productInfo={mockProductInfo}/>);
   expect(screen.queryAllByText('QUESTIONS & ANSWERS')).toHaveLength(1)
   expect(screen.queryAllByText('Add Question')).toHaveLength(1)
});

test('Answer images render correctly', () => {
  render(<ImageListEntry photo={'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'}/>)
})

test('Answer modal inputs trigger onChange when changed', () => {
  render(<AddAnswer productInfo={mockProductInfo} question_id={563551} question_body={'Expedita aut cumque aliquid reiciendis porro libero.'}/>)
})

test("onChange() is called upon changing the 'Your Answer' field", () => {
  const { getByTestId } = render(<AddAnswer productInfo={mockProductInfo} question_id={563551} question_body={'Expedita aut cumque aliquid reiciendis porro libero.'} />)
  const input = getByTestId('your_answer');
  fireEvent.change(input, { target: { value: 'test' } });
});

test("onChange() is called upon changing the 'Nickname' field", () => {
  const { getByTestId } = render(<AddAnswer productInfo={mockProductInfo} question_id={563551} question_body={'Expedita aut cumque aliquid reiciendis porro libero.'} />)
  const input = getByTestId('nickname');
  fireEvent.change(input, { target: { value: 'test' } });
});

test("onChange() is called upon changing the 'Email' field", () => {
  const { getByTestId } = render(<AddAnswer productInfo={mockProductInfo} question_id={563551} question_body={'Expedita aut cumque aliquid reiciendis porro libero.'} />)
  const input = getByTestId('email');
  fireEvent.change(input, { target: { value: 'test' } });
});

test("onClick() is called upon submitting AddAnswer form", () => {
  const jsdomalert = window.alert;
  window.alert = () => {};
  const { getByTestId } = render(<AddAnswer productInfo={mockProductInfo} question_id={563551} question_body={'Expedita aut cumque aliquid reiciendis porro libero.'} />)
  const button = getByTestId('submit');
  fireEvent.click(button);
  window.alert = jsdomalert;
});

test("Email is rejected if not formatted correctly in AddAnswer form", () => {
  const jsdomalert = window.alert;
  window.alert = () => {};
  const { getByTestId } = render(<AddAnswer productInfo={mockProductInfo} question_id={563551} question_body={'Expedita aut cumque aliquid reiciendis porro libero.'} />)
  const email = getByTestId('email');
  const answer = getByTestId('your_answer');
  const nickname = getByTestId('nickname');
  const button = getByTestId('submit');
  fireEvent.change(nickname, { target: { value: 'test' } });
  fireEvent.change(answer, { target: { value: 'test' } });
  fireEvent.change(email, { target: { value: 'test' } });
  fireEvent.click(button);
  window.alert = jsdomalert;
});

test("Submit after everything has been inputed correctly in AddAnswer form", () => {
  const setQuestions = jest.fn()
  const addAnswer = jest.fn();
  const getQuestions = jest.fn();
  const setAddAnswerVisible = jest.fn();
  const jsdomalert = window.alert;
  window.alert = () => {};
  const { getByTestId } = render(<AddAnswer productInfo={mockProductInfo} question_id={563551} question_body={'Expedita aut cumque aliquid reiciendis porro libero.'} />)
  const email = getByTestId('email');
  const answer = getByTestId('your_answer');
  const nickname = getByTestId('nickname');
  const button = getByTestId('submit');
  fireEvent.change(nickname, { target: { value: 'test' } });
  fireEvent.change(answer, { target: { value: 'test' } });
  fireEvent.change(email, { target: { value: 'michael@gmail.com' } });
  fireEvent.click(button);
  window.alert = jsdomalert;
});

test("Submit after everything, including images, has been inputed correctly in AddAnswer form", () => {
  const jsdomalert = window.alert;
  window.alert = () => {};
  const { getByTestId } = render(<AddAnswer productInfo={mockProductInfo} question_id={563551} question_body={'Expedita aut cumque aliquid reiciendis porro libero.'} />)
  global.URL.createObjectURL = jest.fn();
  const email = getByTestId('email');
  const answer = getByTestId('your_answer');
  const nickname = getByTestId('nickname');
  const button = getByTestId('submit');
  const files = getByTestId('files');
  const imageFile = new File(['image content'], './../../assets/no_pic.png', { type: 'image/png' });
  fireEvent.change(files, { target: { files: [imageFile]} });
  fireEvent.change(nickname, { target: { value: 'test' } });
  fireEvent.change(answer, { target: { value: 'test' } });
  fireEvent.change(email, { target: { value: 'michael@gmail.com' } });
  fireEvent.click(button);
  window.alert = jsdomalert;
});

test("Alert should pop up if too many images added", () => {
  const jsdomalert = window.alert;
  window.alert = () => {};
  const { getByTestId } = render(<AddAnswer productInfo={mockProductInfo} question_id={563551} question_body={'Expedita aut cumque aliquid reiciendis porro libero.'} />)
  global.URL.createObjectURL = jest.fn();
  const email = getByTestId('email');
  const answer = getByTestId('your_answer');
  const nickname = getByTestId('nickname');
  const button = getByTestId('submit');
  const files = getByTestId('files');
  const exFiles = [
    new File(['image content'], './../../assets/no_pic.png', { type: 'image/png' }),
    new File(['image content'], './../../assets/no_pic.png', { type: 'image/png' }),
    new File(['image content'], './../../assets/no_pic.png', { type: 'image/png' }),
    new File(['image content'], './../../assets/no_pic.png', { type: 'image/png' }),
    new File(['image content'], './../../assets/no_pic.png', { type: 'image/png' }),
    new File(['image content'], './../../assets/no_pic.png', { type: 'image/png' })
  ];
  fireEvent.change(files, { target: { files: exFiles} });
  fireEvent.change(nickname, { target: { value: 'test' } });
  fireEvent.change(answer, { target: { value: 'test' } });
  fireEvent.change(email, { target: { value: 'michael@gmail.com' } });
  fireEvent.click(button);
  window.alert = jsdomalert;
});

test("Exit on press of exit div", () => {
  const setAddAnswerVisible = jest.fn();
  const { getByTestId } = render(<AddAnswer productInfo={mockProductInfo} question_id={563551} question_body={'Expedita aut cumque aliquid reiciendis porro libero.'} />)
  const exit = getByTestId('exit');
  fireEvent.click(exit);
});

test('Question modal renders correctly', () => {
  render(<AddQuestion productInfo={mockProductInfo}/>)
})

test('Question modal inputs change state', () => {
  const { getByTestId } = render(<AddQuestion productInfo={mockProductInfo}/>);
  const email = getByTestId('email');
  const answer = getByTestId('question');
  const nickname = getByTestId('nickname');
  fireEvent.change(nickname, { target: { value: 'test' } });
  fireEvent.change(answer, { target: { value: 'test' } });
  fireEvent.change(email, { target: { value: 'michael@gmail.com' } });
})

test('Question modal give alert with bad email format', () => {
  const jsdomalert = window.alert;
  window.alert = () => {};
  const { getByTestId } = render(<AddQuestion productInfo={mockProductInfo}/>);
  const email = getByTestId('email');
  const answer = getByTestId('question');
  const nickname = getByTestId('nickname');
  const button = getByTestId('submit');
  fireEvent.change(nickname, { target: { value: 'test' } });
  fireEvent.change(answer, { target: { value: 'test' } });
  fireEvent.change(email, { target: { value: 'test' } });
  fireEvent.click(button);
  window.alert = jsdomalert;
})

test('Question modal give alert with empty field', () => {
  const jsdomalert = window.alert;
  window.alert = () => {};
  const { getByTestId } = render(<AddQuestion productInfo={mockProductInfo}/>);
  const email = getByTestId('email');
  const answer = getByTestId('question');
  const nickname = getByTestId('nickname');
  const button = getByTestId('submit');
  fireEvent.change(nickname, { target: { value: '' } });
  fireEvent.change(answer, { target: { value: 'test' } });
  fireEvent.change(email, { target: { value: 'test' } });
  fireEvent.click(button);
  window.alert = jsdomalert;
})

test('Question modal handle click on submit button', () => {
  const getQuestions = jest.fn();
  const addQuestion = jest.fn();
  const setQuestions = jest.fn();
  const setModalVisible = jest.fn();
  const { getByTestId } = render(<AddQuestion productInfo={mockProductInfo}/>);
  const email = getByTestId('email');
  const answer = getByTestId('question');
  const nickname = getByTestId('nickname');
  const button = getByTestId('submit');
  fireEvent.change(nickname, { target: { value: 'test' } });
  fireEvent.change(answer, { target: { value: 'test' } });
  fireEvent.change(email, { target: { value: 'michael@gmail.com' } });
  fireEvent.click(button);
})

test("Exit on press of exit div", () => {
  const setModalVisible = jest.fn();
  const { getByTestId } = render(<AddQuestion productInfo={mockProductInfo}/>)
  const exit = getByTestId('exit');
  fireEvent.click(exit);
});

test('Question modal renders correctly', () => {
  render(<AddQuestion productInfo={mockProductInfo}/>)
})

test('Answer Image List renders correctly',  () => {
   render(<AnswerImageList product_id={37323} answers={{
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

test('Answer Images render correctly',  () => {
   render(<AnswerImageListEntry product_id={37323} image={'blob:http://localhost:3000/724bd57e-3ff9-4c34-9532-1f58bf3049e5'} imageList={['blob:http://localhost:3000/724bd57e-3ff9-4c34-9532-1f58bf3049e5']}/>)
})

test('Answer Images deletes correctly',  () => {
  const { getByTestId } =  render(<AnswerImageListEntry product_id={37323} image={'blob:http://localhost:3000/724bd57e-3ff9-4c34-9532-1f58bf3049e5'} imageList={['blob:http://localhost:3000/724bd57e-3ff9-4c34-9532-1f58bf3049e5', 'blob:http://localhost:3000/b97d2be9-3284-42ee-a4a1-fcba189e817f']}/>)
  const exit = getByTestId('exit');
  fireEvent.click(exit);
})

test('ImageList renders correctly', () => {
  render(<ImageList photos={['https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80']}/>)
})

test('AnswerListEntry renders correctly', () => {
  render(<AnswerListEntry product_id={37315} answer={mockAnswer}/>)
})

test('AnswerListEntry handles helpful click',  () => {
  const { getByTestId } = render(<AnswerListEntry product_id={37315} answer={mockAnswer}/>);
  const helpful = getByTestId('helpful');
  fireEvent.click(helpful);
})

test('AnswerListEntry handles report click',  () => {
  const reportAnswer = jest.fn();
  const { getByTestId } = render(<AnswerListEntry product_id={37315} answer={mockAnswer}/>);
  const report = getByTestId('report');
  fireEvent.click(report);
})

test('AnswerList renders correctly', () => {
  render(<AnswerList product_id={37315} answers={mockAnswers}/>)
})

test('QA list renders correctly', () => {
  render(<QAList product_id={37315} questions={mockQuestions}/>)
})

test('QAListEntry renders correctly', () => {
  render(<QAListEntry productInfo={mockProductInfo} question={mockQuestion}/>)
})

test('QAListEntry press on add answer triggers addAnswer handler', () => {
  const { getByTestId } = render(<QAListEntry productInfo={mockProductInfo} question={mockQuestion}/>)
  const addAnswer = getByTestId('add_answer');
  fireEvent.click(addAnswer);
})

test('QAListEntry press on helpful click triggers helpful handler', () => {
  const { getByTestId } = render(<QAListEntry productInfo={mockProductInfo} question={mockQuestion}/>)
  const helpful = getByTestId('question_helpful');
  fireEvent.click(helpful);
})

test('QAListEntry press on reporte click triggers reporte handler', () => {
  const { getByTestId } = render(<QAListEntry productInfo={mockProductInfo} question={mockQuestion}/>)
  const report = getByTestId('question_report');
  fireEvent.click(report);
})