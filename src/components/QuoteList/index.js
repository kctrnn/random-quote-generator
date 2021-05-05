import PropTypes from 'prop-types';
import React from 'react';

const QuoteList = ({ quoteList }) => {
  return (
    <div className='quote-list'>
      {quoteList.map((quote) => (
        <p key={quote._id} className='quote-text'>{`"${quote.quoteText}"`}</p>
      ))}
    </div>
  );
};

QuoteList.propTypes = {
  quoteList: PropTypes.array,
};

QuoteList.defaultProps = {
  quoteList: [],
};

export default QuoteList;
