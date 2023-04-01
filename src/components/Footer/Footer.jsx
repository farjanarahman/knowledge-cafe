import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch('./dataOne.json')
      .then(res => res.json())
      .then(data => setQuestions(data))
  }, [])
  return (
    <div className='container px-md-5 mt-3 mb-5 text-light'>

      <div className='px-md-5 text-ight-emphasisl'>
        <div className='bg-dark p-sm-1 p-md-5 rounded-5 '>
          <p className='fs-3 mb-5'>Question Area</p>
          <div>
            {
              questions.map((question, key) => {
                return (
                  <div key={question.id}>
                    <p className='fw-bold'>{question.id}. {question.question}</p>
                    <p className='ps-2'>Answer: {question.answer} </p>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;