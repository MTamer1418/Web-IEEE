import React from 'react';
import props from 'prop-types';

const Tweet = (props) => {
  return (
    <div className='tweet'>
        <h2>{props.name}</h2>
        <h3>{props.message}</h3>
        <button>Delete</button>
        <button>Like</button>
    </div>
  );
}

export default Tweet;
