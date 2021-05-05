import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import quoteApi from '../../api/quoteApi';
import './HomePage.scss';

const HomePage = () => {
  const [quote, setQuote] = useState({});
  const [refresh, setRefresh] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const response = await quoteApi.getRandom();
        const randomQuote = response.data[0];

        setQuote(randomQuote);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRandomQuote();
  }, [refresh]);

  const handleDetailsClick = () => {
    history.push(`/${quote.quoteAuthor}`);
  };

  return (
    <div className='quote-main'>
      <div className='quote-random' onClick={() => setRefresh((x) => !x)}>
        <span className='quote-random-text'>Random</span>
        <AutorenewIcon
          className='quote-random-icon'
          style={{ fontSize: '2.2rem' }}
        />
      </div>

      <div className='quote-inner'>
        {quote.quoteText && (
          <p className='quote-text'>{`"${quote.quoteText}"`}</p>
        )}

        <div className='quote-details' onClick={handleDetailsClick}>
          <div className='quote-details-inner'>
            <p className='quote-details-author'>{quote.quoteAuthor}</p>
            <p className='quote-details-genre'>{quote.quoteGenre}</p>
          </div>

          <ArrowRightAltIcon
            className='quote-details-icon'
            style={{ fontSize: '3rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
