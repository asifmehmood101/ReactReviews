import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, text, image, job } = people[index];

  //make random fucntion
  const Random = () => {
    const randomPerson = Math.floor(Math.random() * people.length);
    setIndex(randomPerson);
  };

  //check number
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  //prev func
  const prev = () => {
    setIndex((index) => {
      const prevPerson = index - 1;
      return checkNumber(prevPerson);
    });
  };
  //next func
  const next = () => {
    setIndex((index) => {
      const nextPerson = index + 1;
      return checkNumber(nextPerson);
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={next}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={Random}>
        Get Random
      </button>
    </article>
  );
};

export default Review;
