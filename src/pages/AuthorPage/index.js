import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

const AuthorPage = (props) => {
  const { author } = useParams();
  console.log(author);

  return <div>{author}</div>;
};

AuthorPage.propTypes = {};

export default AuthorPage;
