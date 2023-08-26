import React, {useState} from 'react';
import {getQuestions} from './../../../fetch.jsx';
import _ from 'underscore';

const Search = ({productInfo, setQuestions, setQuery, qListSize}) => {

  const [resetQs, setResetQs] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length >= 3) {
      setResetQs(true);
      getQuestions(productInfo.data.id)
        .then((results) => {
          return _.filter(results.data.results, (question) => {
            return question.question_body.toLowerCase().includes(e.target.value.toLowerCase());
          });
        })
        .then((results) => {
          setQuestions(results.slice(0, qListSize));
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (e.target.value.length < 3 && resetQs) {
      setResetQs(false);
      getQuestions(productInfo.data.id)
        .then((results) => {
          setQuestions(results.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <input className='qa_search' placeholder='Have a question? Search for answers…' onChange={handleChange}></input>
  );
};

export default Search;