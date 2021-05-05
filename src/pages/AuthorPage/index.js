import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import quoteApi from '../../api/quoteApi';
import QuoteList from '../../components/QuoteList';
import './AuthorPage.scss';

const AuthorPage = () => {
  const [quoteList, setQuoteList] = useState([]);

  const history = useHistory();

  const { author } = useParams();
  console.log(author);

  useEffect(() => {
    const fetchQuoteByAuthor = async () => {
      try {
        const response = await quoteApi.getByAuthor(author);
        setQuoteList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuoteByAuthor();
  }, [author]);

  const handleBackClick = () => {
    history.push('/');
  };

  return (
    <div className='author-page'>
      <h1 className='quote-author'>{author}</h1>

      <ArrowBackIosIcon
        fontSize='large'
        className='quote-back'
        onClick={handleBackClick}
      />

      <QuoteList quoteList={quoteList} />
    </div>
  );
};

export default AuthorPage;
