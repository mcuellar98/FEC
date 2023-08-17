import React, {useState} from 'react';
import {getQuestions} from './../../../fetch.jsx';
import _ from 'underscore';

const Search = ({product_id, setQuestions, setQuery}) => {

  const [resetQs, setResetQs] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length >= 3) {
      setResetQs(true);
      getQuestions(product_id)
        .then((results) => {
          console.log(results.data.results);
          return _.filter(results.data.results, (question) => {
            return question.question_body.toLowerCase().includes(e.target.value.toLowerCase());
          });
        })
        .then((results) => {
          setQuestions(results);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (e.target.value.length < 3 && resetQs) {
      setResetQs(false);
      getQuestions(product_id)
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